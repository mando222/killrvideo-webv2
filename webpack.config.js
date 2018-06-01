var webpack = require('webpack');
var path = require('path');

var PROD_BUILD_DIR = path.resolve(__dirname, 'src/client/src');
var DEV_BUILD_DIR = path.resolve(__dirname, 'src/client/src');
var APP_DIR = path.resolve(__dirname, 'src/client/src');

var entryPoints = {
    index: APP_DIR + '/index.jsx',
}

var prod = {
    entry: entryPoints,
    output: {
        path: PROD_BUILD_DIR,
        filename: "[name].js"
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};
var dev = {
    entry: entryPoints,
    output: {
        path: DEV_BUILD_DIR,
        filename: "[name].js"
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
}

module.exports = [prod, dev];