/**
 * Created by leon on 17/1/19.
 */
'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html inject


module.exports = {
    /*
    * 入口文件
    * vendor：公共文件，抽出来可缓存时间较长
    * app: 业务文件，频繁改动
    * */
    entry: {
        'app': [path.resolve(__dirname, './src/index.js')]
    },
    /*
    * 打包产物输出目录
    * */
    output: {
        path: '/build',
        filename: '[name].js',
        chunkFilename: '[id].js'
    },
    module: {
        loaders: [
            { 
                test: /\.js|\.jsx$/, 
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader" 
            }
        ]
    },
    plugins: [
        /*
        * html文件，manifest保证打包出来的文件最小版本变动
        * https://github.com/webpack/webpack/issues/1150
         * */
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: './index.html',
        }),
    ],
    devtool: "#inline-source-map",
    /*
    * 代理请求
    * */
    devServer: {
        contentBase: "./src"
    }
};