#!/usr/bin/env bash
cd /vagrant

# update APT repositories before installing anything else
apt-get update
 
# install g++ to compile stuff
apt-get install -y g++

# image libraries for python Pillow
apt-get install -y zlib1g-dev libpng-dev libjpeg-dev libtiff-dev libfreetype6-dev liblcms liblcms-dev liblcms-utils
apt-get build-dep -y python-imaging

# install git for bower
apt-get install -y git

# install node.js the usual way
curl -sL https://deb.nodesource.com/setup_7.x | sh
apt-get install -y nodejs

# install pip
apt-get install -y python-pip

# install nginx
apt-get -y install nginx

# dependencies
npm install
npm install http-server bower -g
bower install --allow-root
pip install -r requirements.txt

# migrations
python src/main/api/manage.py migrate --noinput

# set up the services
# nginx
cp -f provision/recipi-proxy.conf /etc/nginx/sites-available/site.conf
chmod 644 /etc/nginx/sites-available/site.conf
ln -sf /etc/nginx/sites-available/site.conf /etc/nginx/sites-enabled/site.conf
# python
cp -f provision/recipi-api.conf /etc/init/
# node
cp -f provision/recipi-node.conf /etc/init/

# start the servers as services
service recipi-api start
service recipi-node start
service nginx restart

echo "cd /vagrant" >> /home/vagrant/.bashrc
