var webpack = require('webpack');
var path = require('path');

var prod = {
    entry: path.resolve(__dirname, 'src') + "/index.jsx",
    output: {
        path: path.resolve(__dirname, 'src/public'),
        filename: "killrvideo-client.js"
    },
    module : {
        rules : [
            {
                test : /\.jsx?/,
                include : path.resolve(__dirname, 'src'),
                loader : 'babel-loader',
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "src/public"),
        compress: true,
        port: 8080
    }
};

module.exports = [prod];