#!/usr/bin/bash
NOCOLOR='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
LIGHTGRAY='\033[0;37m'
DARKGRAY='\033[1;30m'
PURPLE='\033[1;31m'
LIGHTGREEN='\033[1;32m'
YELLOW='\033[1;33m'
LIGHTRED='\033[1;34m'
LIGHTPURPLE='\033[1;35m'
LIGHTCYAN='\033[1;36m'
WHITE='\033[1;37m'

 echo -e " ${YELLOW}Getting Started..."
sleep 4

echo -e "Bot created by:"
sleep 1

echo -e " ${RED} █████████████████████████████████████████████████████████████ "
echo -e " ${RED} █▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒██▒▒▒▒▒▒█ "
echo -e " ${RED} █▒▒▄▀▄▀▄▀▄▀▄▀▒▒█▒▒▄▀▄▀▄▀▄▀▄▀▒▒█▒▒▄▀▄▀▄▀▄▀▄▀▒▒█▒▒▄▀▒▒██▒▒▄▀▒▒█ "
echo -e " ${RED} █▒▒▄▀▒▒▒▒▒▒▒▒▒▒█▒▒▄▀▒▒▒▒▒▒▄▀▒▒█▒▒▄▀▒▒▒▒▒▒▒▒▒▒█▒▒▄▀▒▒██▒▒▄▀▒▒█ "
echo -e " ${RED} █▒▒▄▀▒▒█████████▒▒▄▀▒▒██▒▒▄▀▒▒█▒▒▄▀▒▒█████████▒▒▄▀▒▒██▒▒▄▀▒▒█ "
echo -e " ${RED} █▒▒▄▀▒▒▒▒▒▒▒▒▒▒█▒▒▄▀▒▒▒▒▒▒▄▀▒▒█▒▒▄▀▒▒▒▒▒▒▒▒▒▒█▒▒▄▀▒▒██▒▒▄▀▒▒█ "
echo -e " ${RED} █▒▒▄▀▄▀▄▀▄▀▄▀▒▒█▒▒▄▀▄▀▄▀▄▀▄▀▒▒█▒▒▄▀▄▀▄▀▄▀▄▀▒▒█▒▒▄▀▒▒██▒▒▄▀▒▒█ "
echo -e " ${RED} █▒▒▒▒▒▒▒▒▒▒▄▀▒▒█▒▒▄▀▒▒▒▒▒▒▄▀▒▒█▒▒▄▀▒▒▒▒▒▒▒▒▒▒█▒▒▄▀▒▒██▒▒▄▀▒▒█ "
echo -e " ${RED} █████████▒▒▄▀▒▒█▒▒▄▀▒▒██▒▒▄▀▒▒█▒▒▄▀▒▒█████████▒▒▄▀▒▒██▒▒▄▀▒▒█ "
echo -e " ${RED} █▒▒▒▒▒▒▒▒▒▒▄▀▒▒█▒▒▄▀▒▒██▒▒▄▀▒▒█▒▒▄▀▒▒█████████▒▒▄▀▒▒▒▒▒▒▄▀▒▒█ "
echo -e " ${RED} █▒▒▄▀▄▀▄▀▄▀▄▀▒▒█▒▒▄▀▒▒██▒▒▄▀▒▒█▒▒▄▀▒▒█████████▒▒▄▀▄▀▄▀▄▀▄▀▒▒█ "
echo -e " ${RED} █▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒██▒▒▒▒▒▒█▒▒▒▒▒▒█████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒█ "
echo -e " ${RED} █████████████████████████████████████████████████████████████ "

sleep 2

echo -e " ${YELLOW} Hi"
echo -e " ${YELLOW} All necessary dependencies will be installed"
echo -e " ${YELLOW} just wait a little bit..."
sleep 5

echo -e " ${CYAN}Installing all dependencies..."
sleep 5

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Using the command: apt-get update"
echo -e " ${GREEN}"
sleep 5
apt-get update -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Using the command: apt-get upgrade"
echo -e " ${GREEN}"
sleep 5
apt-get upgrade -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Using the command: apt-get install nodejs"
echo -e " ${GREEN}"
sleep 5
apt-get install nodejs -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Using the command: apt-get install libwebp"
echo -e " ${GREEN}"
sleep 5
apt-get install libwebp -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Using the command: apt-get install ffmpeg"
echo -e " ${GREEN}"
sleep 5
apt-get install ffmpeg -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Using the command: apt-get install wget"
echo -e " ${GREEN}"
sleep 5
apt-get install wget -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Using the command: apt-get install imagemagick"
echo -e " ${GREEN}"
sleep 5
apt-get install imagemagick -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Using the command: apt-get install tesseract"
echo -e " ${GREEN}"
sleep 5
apt-get install tesseract -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Using the command: npm i imgbb-uploader"
echo -e " ${GREEN}"
sleep 5
npm i imgbb-uploader

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Clearing npm cache..."
echo -e " ${GREEN}"
sleep 5
npm install

echo -e " ${YELLOW} All dependencies have been installed."
echo -e " ${YELLOW} Update: minimal changes"
echo -e " ${YELLOW} Translated and modified by safwan/toxic. Base original script wabot-aq
echo -e " ${YELLOW} Use the command: ${GREEN}npm start ${YELLOW}to start the bot."

