const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')


// Object.keys(base.entry).filter(key => key !== 'vendor').forEach(key => {
//     entry[key] = ['webpack-hot-middleware/client?reload=true'].concat(base.entry[key])
// })
// base.entry = entry
const config = merge(base, {
    plugins: [
    ],
})


module.exports = config
