var webpack = require('webpack');
var path = require('path');
var combineLoaders = require('webpack-combine-loaders');
require('style-loader');
require('css-loader');


var SOURCE_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR  = path.resolve(__dirname, 'src/public');

var dev = {
    devtool: 'eval-source-map',
    entry: SOURCE_DIR + "/index.jsx",
    mode: "development",
    output: {
        path: BUILD_DIR,
        filename: "killrvideo-client.js",
    },
    module: {
        rules: [
            {
                test : /\.jsx?/,
                include : SOURCE_DIR,
                loader : 'babel-loader',
            }, {
                test: /\.css$/,
                loader: combineLoaders([
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                ])
            }
        ]
    },
    devServer: {
        contentBase: BUILD_DIR,
        compress: true,
        port: 8080
    },

};

module.exports = [dev];

