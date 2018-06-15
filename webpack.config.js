var webpack = require('webpack');
var path = require('path');


var SOURCE_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR  = path.resolve(__dirname, 'src/public');


var prod = {
    entry: SOURCE_DIR + "/index.jsx",
    output: {
        path: BUILD_DIR,
        filename: "killrvideo-client.js"
    },
    module : {
        rules : [
            {
                test : /\.jsx?/,
                include : SOURCE_DIR,
                loader : 'babel-loader',
            },
        ]
    },
    devServer: {
        contentBase: BUILD_DIR,
        compress: true,
        port: 8080
    }
};

module.exports = [prod];

