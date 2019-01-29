const koa = require('koa')
const path = require('path')
const forward = require('forward-request')
const webpack = require('webpack')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevMiddlemare = require('webpack-dev-middleware')
const webpackConfig = require('./config/webpack.dev.config.js')

const app = new koa();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddlemare(compiler, {
    hot: true,
    quiet: true,
    publicPath: webpackConfig.output.publicPath
}))

app.use(webpackHotMiddleware(compiler, {
    log: () => {}
}))

app.listen(3000)