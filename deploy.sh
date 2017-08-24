#! /bin/bash

echo "Starting deploy"

docker-compose down
docker-compose build personal-website
docker-compose up -d

echo "Complete"
