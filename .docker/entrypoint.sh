#!/bin/bash

npm run start:dev &

/docker-entrypoint.sh

# filebeat modules enable nginx

# service filebeat start

nginx -g "daemon off;"
