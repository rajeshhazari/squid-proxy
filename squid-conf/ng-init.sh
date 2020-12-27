#!/bin/bash

DESCRIPTION="This script will create new Angular material app in given dir."

# Highlight colors
MESG="\e[1;32m *\e[0;39m"
WARN="\a\e[1;33m * WARNING:\e[0;39m"

absDir=$1
pname=$2
if [ -d $1 ]; then 
    #ng new proxy-core --skip-install --routing --style=css
    ng new $1 --skip-install --routing --style=css
else 
    echo -e "$MESG $1 dir shold exists to create new app"
fi