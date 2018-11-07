const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = merge(base, {
    mode: 'production',
    plugins: [
        // new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname,'../')
        })
    ]
});