const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname,'../src/main.js'),
    output: {
        filename: 'js/[name]-[hash].js',
        path: path.resolve(__dirname,'../dist')
    },
    module:{
        rules:[
            { 
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude:[/node_modules/]
            },
            { 
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude:[/node_modules/,/public/]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name:'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 8000,
                    name:'font/[name].[hash:7].[ext]'
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
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