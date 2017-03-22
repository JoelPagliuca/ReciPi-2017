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

## Quickstart
```
cd com.jpagliuca.recipi
npm install
pip install -r requirement.txt
python src/main/api/manage.py migrate
npm start && ./startapi.sh
```

## Dependencies
* NodeJS
* Python
    * Django
    * Django-rest-framework
* Nginx
