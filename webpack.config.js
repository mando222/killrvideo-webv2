var webpack = require('webpack');
var path = require('path');

var prod = {
        entry: path.resolve(__dirname, 'src/client') + "/index.jsx",
        output: {
            path: path.resolve(__dirname, 'src/client/public'),
            filename: "killrvideo-client.js"
    },
    module : {
        rules : [
            {
                test : /\.jsx?/,
                include : path.resolve(__dirname, 'src/client'),
                loader : 'babel-loader'
            }
        ]
    }
};

module.exports = [prod];