#! /bin/bash

echo "Starting deploy"
git pull origin master

docker-compose down
docker-compose build personal-website
docker-compose -d up

echo "Complete"
