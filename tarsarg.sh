D_TAR=`date +%Y%b%d --date="15 days ago"`
D_DEL=`date +%Y%b%d --date="3 months ago"`
DAILY=/opt/apps/squid-setup/reports/Daily
ARCHIVE=/opt/apps/squid-setup/reports/Archive
LOGFILE=/etc/squid/tarsarg.log


[ $EUID != 0 ] && echo -e "$WARN This script must be run as root, exiting !" && exit 1
[ ! -f ${CONFIGFILE} ] && echo -e "$WARN The configuration file ${CONFIGFILE} does not exist !" && exit 1

mkdir -pv $DAILY  $ARCHIVE


if [ ! -d $DAILY/$D_TAR-$D_TAR/ ]
then
   echo "`date`: error: report for $D_TAR not found" >> $LOGFILE
else
   tar -czf $ARCHIVE/$D_TAR.tar.gz $DAILY/$D_TAR-$D_TAR/
   rm -rf $DAILY/$D_TAR-$D_TAR/
   echo "`date`: archived $D_TAR" >> $LOGFILE
fi
if [ ! -e $ARCHIVE/$D_DEL.tar.gz ]
then
   echo "`date`: error: targzip $D_DEL not found" >> $LOGFILE
else
   rm -f $ARCHIVE/$D_DEL.tar.gz
   echo "`date`: deleted targzip $D_DEL" >> $LOGFILE
fi
