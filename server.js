const koa = require('koa')
const path = require('path')
const forward = require('forward')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevMiddlemare = require('webpack-dev-middleware')
const webpackConfig = require('./config/webpack.dev.config.js')

const app = koa();



