const commonConf = require('./webpack.common');
const {merge} = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(commonConf,{
    mode:'production',
    plugins:[
        new UglifyJSPlugin(),
        new MiniCssExtractPlugin({
            filename:`[name]_[contenthash:8].css`
        })
    ]
})