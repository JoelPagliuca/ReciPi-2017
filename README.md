# ReciPi
A Djangular web app for storing all my cooking recipes. 
It'll end up running on a Raspberry Pi.
I just have fun building on this project.

Running this with Docker, need to work on different setups for _dev_ and _prod_

## Installation

### Docker
```
docker-compose up
```

## Development
Uncomment the volume section of the compose file for live reload, then download the Bower and Node dependencies yourself before booting up Docker.

## Dependencies
Actual dependencies for the project
* NodeJS
* Bower
* Python2
* Nginx
