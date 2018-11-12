const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //分离css
module.exports = {
    entry: ['@babel/polyfill',path.resolve(__dirname,'../src/main.js')],
    output: {
        filename: 'js/[name]-[hash].js',
        path: path.resolve(__dirname,'../dist')
    },
    module:{
        rules:[
            { 
                test:/\.css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ],
                exclude:[/node_modules/]
            },
            { 
                test:/\.vue$/,
                use:['eslint-loader','vue-loader']
            },
            {
                test: /\.js$/,
                loader: ['eslint-loader','babel-loader'],
                exclude:[/node_modules/,/public/]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                options:{
                    name:'img/[name]-[hash].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options:{
                    name:'font/[name]-[hash].[ext]'
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name]-[hash].css",
            chunkFilename: "css/[id]-[hash].css"
        }),
        new CopyWebpackPlugin([ 
            {
                from: 'public/',
                to: '../dist',
                ignore: ['*.html']
            }
        ]),
        new HtmlWebpackPlugin({template: path.resolve(__dirname,'../public/index.html')})
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src/')
        }
    }
}