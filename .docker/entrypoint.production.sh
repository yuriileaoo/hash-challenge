#!/bin/bash

pm2 start --name captation_service ./dist/infra/server.js

pm2 logs --json &

/docker-entrypoint.sh

filebeat modules enable nginx
metricbeat modules enable docker

service metricbeat start
service filebeat start

nginx -g "daemon off;"
