#!/usr/bin/env bash

# start the server
#node ./src/server/server.js
npm run server-start

# start the client (config from webpack.config.js)
npm run dev-watch
npm run client-start

