const commonConf = require('./webpack.common.js');
const {merge} = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(commonConf,{
    mode:'development',
    devtool:'cheap-module-source-map',
    devServer:{
        host:'0.0.0.0',
        port:8080,
        hot:true,
        contentBase:'./dist',
        open:true,
        hotOnly:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin()
    ]
})