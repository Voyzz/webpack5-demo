const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode:'development',
    devtool:'cheap-module-source-map',
    devServer:{
        contentBase:'./dist',
        open:true,
        port:8080,
        hot:true,
        hotOnly:true,
        host:'0.0.0.0'
    },
    entry:{
        main:'./src/index.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_mudules/,
                use:{
                    loader:'babel-loader',
                }
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        name:'[name]_[hash].[ext]',
                        outputPath:'images/',
                        limit:20480
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:2,
                        }
                    }, 
                    'postcss-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:2,
                            modules:true
                        }
                    }, 
                    'sass-loader'
                ]
            },
            {
                test:/\.(eot|ttf|svg|woff|woff2)$/,
                use:{
                    loader:'file-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
}