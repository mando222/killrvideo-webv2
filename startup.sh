#!/usr/bin/env bash

# start the server
node ./src/server/server.js

# start the client (config from webpack.config.js)
npm run dev-watch
npm run start-dev

