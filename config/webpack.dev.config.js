const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')

const config = merge(base, {
    entry:{
        ad: './src/pages/ad/'
    },
    plugins: [
    ],
})


module.exports = config
