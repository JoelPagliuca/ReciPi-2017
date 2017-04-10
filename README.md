# ReciPi
A Djangular web app for storing all my cooking recipes. 
It'll end up running on a Raspberry Pi.

I run this off a Vagrant instance at the moment, check the bootstrap script to see how to boot this on a _prod_ server

## Vagrant
Using vagrant:

```
cd com.jpagliuca.recipi
vagrant up
```

## Installation
```
cd com.jpagliuca.recipi
npm install
pip install -r requirement.txt
python src/main/api/manage.py migrate
npm start && ./startapi.sh
```

out of date ^ check the provisioning `bootstrap.sh` script

## Dependencies
* NodeJS
* Python2
    * Django
    * Django-rest-framework
* Nginx

### Dev dependencies
* Vagrant

## Troubleshooting (Development)
*  `vagrant up` then the api doesn't run
    * ssh into the container
    * `sudo service recipi-api start`
