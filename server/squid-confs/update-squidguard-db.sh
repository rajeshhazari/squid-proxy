#!/bin/bash

DESCRIPTION="This script is used to update your SquidGuard database"

SRC_URI="http://squidguard.mesd.k12.or.us"
DATABASE="/var/lib/squidguard/db"
SQUID_CONFIGFILE="/etc/squid/squid.conf"
SQUIDGUARD_CONFIGFILE="/etc/squidguard/squidGuard.conf"
SQUIDUSER="proxy"
SQUIDPID="/var/run/squid.pid"
LOGFILE_DIR="/var/log/squidguard"

# Highlight colors
MESG="\e[1;32m *\e[0;39m"
WARN="\a\e[1;33m * WARNING:\e[0;39m"

echo
echo -e "$MESG ${DESCRIPTION}"
echo -e "$MESG This script will assume that squid is setup and working and squid.conf has below squidguard rules \n"
echo -e "$MESG url_rewrite_children 5 startup=0 idle=1  \n"
echo -e "$MESG url_rewrite_children 5 startup=0 idle=1url_rewrite_program /usr/bin/squidGuard -c /etc/squidguard/squidGuard.conf\n"
echo -e "$MESG  squigGuard conf is located at $SQUID_CONFIGFILE  $SQUIDGUARD_CONFIGFILE and squidguard database is located @ $DATABASE\n"
echo -e "$MESG Available option install and update \n\n     install -- This option will install new blacklist urls from $SRC_URI \n"
echo -e "$MESG Available option append and update \n\n     install -- This option will update domains or urls at $DATABASE \n"
echo
cd /opt/apps/temp
# Pre-processing tests
[ $EUID != 0 ] && echo -e "$WARN This script must be run as root, exiting !" && exit 1
[ ! -f ${SQUID_CONFIGFILE} ] && echo -e "$WARN The configuration file ${CONFIGFILE} does not exist !" && exit 1
[ ! -f ${SQUIDGUARD_CONFIGFILE} ] && echo -e "$WARN The configuration file ${CONFIGFILE} does not exist !" && exit 1

#cmd=`awk '$1 == "dest" { print $2 }' ${CONFIGFILE} | sort`
cmd=$1
file=$2
url=$3
base='blacklists'
squidguardcmd=''
DATABASE=$DATABASE"/BL/"
append=false

function appendValToDBFile(){
    v=$1
    if grep -Fxq "$v" $DATABASE$file
    then
        # code if found
        echo "$v"
        echo -e "$WARN $v param already exists in $DATABASE$file "
        return -1
    else
        # code if not found
        more $DATABASE$file | egrep $v
        echo "$v" | tee -a $DATABASE$file
        return 0
    fi
}


function removeValFromUnKnownDomainFile(){
    v=$1
    #if grep -Fxq "$v" $DATABASE$file
    if grep -rnw $DATABASE"/*/domains"  -e "www.walgreens.com"
    then
        # domain if found
        echo "$v"
        echo -e "$WARN $v param already exists in $DATABASE$file "
        return -1
    else
        # code if not found
        more $DATABASE$file | egrep $v
        echo "$v" | tee -a $DATABASE$file
        return 0
    fi
}


if [ $cmd == "install" ]; then # Parse squidGuard config file
    if [ $2 == "squid" ]; then 
        apt-get update -y
        apt-get install squid squid-cgi squid-purge squid3-common squidclient squidguard -y
        cp squid.conf squid.conf.original
        systemctl daemon-reload
        cp ./denykeywords.txt /etc/squid/
        cp ./blacklisted_sites.acl /etc/squid/
        cp ./squid.conf /etc/squid/
        cp ./squidguard.conf /etc/squidguard/
        chown -R $SQUIDUSER:$SQUIDUSER $LOGFILE_DIR /etc/squid/ 
        systemctl enable squid.service
        systemctl start squid.service
        if [ $? -eq 0 ]; then
           echo -e "$MESG squid install completed successfully ..."
           else
            echo -e "$WARN squid install failed  exiting..."
            exit 1
           fi
    fi
   echo -e "$MESG Downloading the blacklist database $SRC_URI/$base.tgz ..."
       wget --continue --quiet --timeout=30 $SRC_URI/$base.tgz
      	if [ ! -e $base.tar.gz ]; then
      		echo
      		echo -e "$WARN The base $base was not found on this server ..."
      		echo "            Please make your checks !"
      		exit 1
      	fi
       tar -xzf $base.tgz 
       if [ -d "$DATABASE/BL" ]; then 
            cp blacklists/*   $DATABASE -R
        else
            mkdir -p $DATABASE/BL
            cp blacklists/*   $DATABASE -R
        fi 
       ls -lrth  $DATABASE/BL
       rm ./$base*
       squidguardcmd='squidGuard -b -C all'
       
elif [[ $cmd == "append" && $file != "" && $url != "" ]] 
    then
        [ ! -f ${SQUID_CONFIGFILE} ] && echo -e "$WARN The configuration file ${SQUID_CONFIGFILE} does not exist !" && exit 1
        [ ! -f ${SQUIDGUARD_CONFIGFILE} ] && echo -e "$WARN The configuration file ${SQUIDGUARD_CONFIGFILE} does not exist !" && exit 1
        echo -e "$MESG DATABASE::   $DATABASE   file:: $file  url:: $url"
        if [ -e "$DATABASE$file" ]; then
            urlarr=$(echo $url |  tr ',' '\n')
            if [ "$#" -gt 1 ]; then 
                
                for val in "${urlarr[@]}" 
                do 
                    echo -e "$MESG processing $val " 
                        appendValToDBFile $val 
                done

            else
                appendValToDBFile $url
                if [ "$?" -eq 0 ]; then 
                    squidguardcmd='squidGuard -b -C '$DATABASE$file 
                else
                    echo -e "$WARN $url aleady persent in db file $DATABASE$file sipr update of db!!"
                    echo 
                    exit 1
                fi
            fi
                if [ $squidguardcmd != "" ]; then
                    echo -e "$MESG SquidGuard update command !!! --->>>> $squidguardcmd"
                else
                    echo -e "$WARN Squid DB need not be updated!!!!"
                    exit 1;
                fi
        else
            echo -e "$WARN File param should be relative to $DATABASE. \n for ex: /var/lib/squidguard/db/BL/adv/domains \n OR /var/lib/squidguard/db/BL/adv/url"
            exit 1
        fi
else
    echo -e  "$WARN please check your command!"
    exit 1
fi

echo -e "$MESG Generating database ... This could take a while, please wait ..."
$squidguardcmd
echo -e "$MESG Checking permissions... "
#ls -lrth $DATABASE  $LOGFILE_DIR
chown -R $SQUIDUSER:$SQUIDUSER $DATABASE
chown -R $SQUIDUSER:$SQUIDUSER $LOGFILE_DIR

squid –k reconfigure
squidguardcmd=''
ps -auxh | grep squid
echo -e "\n$MESG UPDATE STATUS = Done !\n"
exit 0