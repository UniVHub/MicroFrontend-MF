#!/bin/bash

# Function to check if a directory exists
check_directory() {
    if [ -d "$1" ]; then
        return 0 # Directory exists
    else
        return 1 # Directory does not exist
    fi
}

# Function to install dependencies and start npm in a directory
install_and_start_npm() {
    cd "$1" || exit
    npm i
    npm start &
    cd ..
}

# Function to install dependencies and start npm in a directory without backgrounding
install_and_start_npm_wb() {
    cd "$1" || exit
    npm i
    npm start 
    cd ..
}

# Function to kill processes listening on specified ports
kill_processes() {
    echo "Killing processes on ports $@"
    for port in "$@"; do
        kill -9 $(lsof -t -i:$port)
    done
}

# Function to handle script termination
cleanup() {
    echo "Cleaning up..."
    kill_processes 3001 3002 3003
    echo "Script terminated."
    exit 0
}

# Check and perform actions for the "Comments" directory
if check_directory "Comments"; then
    echo "Entering Comments directory..."
    install_and_start_npm "Comments"
else
    echo "Comments directory not found."
fi

# Check and perform actions for the "Posts" directory
if check_directory "Posts"; then
    echo "Entering Posts directory..."
    install_and_start_npm "Posts"
else
    echo "Posts directory not found."
fi

# Check and perform actions for the "container" directory
if check_directory "container"; then
    echo "Entering container directory..."
    install_and_start_npm_wb "container"
else
    echo "container directory not found."
fi

# Print a message in English
echo "Script execution completed. You can now acces to the application at http://localhost:3001/"

#Call to cleanup function 
cleanup