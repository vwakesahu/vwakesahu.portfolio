#!/bin/bash

# Check if internet is working
if ping -c 1 google.com &> /dev/null; then
    # Internet is working, restart the app
    pm2 restart portfolio || pm2 start npm --name "portfolio" -- start
    echo "$(date): Internet OK - Portfolio restarted"
else
    echo "$(date): No internet"
fi
