const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, '../src'),
            '~assets': path.resolve(__dirname, '../src/assets'),
            '~common': path.resolve(__dirname, '../src/common'),
            '~components': path.resolve(__dirname, '../src/components'),
            '~store': path.resolve(__dirname, '../src/store'),
            '~pages': path.resolve(__dirname, '../src/pages'),
            '~directives': path.resolve(__dirname, '../src/directives')
        }
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 3000,
                    name: '[name].[hash].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
}
