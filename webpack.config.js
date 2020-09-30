"use strict"
const path = require('path');
const publicDirPath = path.resolve(__dirname, `public`);

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: publicDirPath
    },
    devServer: {
        contentBase: publicDirPath,
        open: true,
        compress: true,
        port: 1337,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
};
