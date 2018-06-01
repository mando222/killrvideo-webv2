var webpack = require('webpack');
var path = require('path');

var prod = {
    entry: "src/client/src/index.jsx",
    output: {
        path: "src/client/src",
        filename: "killrvideo-client.js"
    }
};

module.exports = [prod];