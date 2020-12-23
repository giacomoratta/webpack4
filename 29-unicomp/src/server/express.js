import express from 'express'
const server = express()
import webpack from 'webpack'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'

// Webpack configs
import configDevClient from '../../config/webpack.dev-client.js'
import configDevServer from '../../config/webpack.dev-server.js'
import configProdClient from '../../config/webpack.prod-client.js'
import configProdServer from '../../config/webpack.prod-server.js'

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

// Webpack middleware only in DEV mode!
if (isDev) {
  const compiler = webpack([configDevClient, configDevServer])
  const clientCompiler = compiler.compilers[0]
  const serverCompiler = compiler.compilers[1]

  require('webpack-mild-compile')(compiler)

  const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    configDevClient.devServer
  )

  const webpackHotMiddleware = require('webpack-hot-middleware')(
    clientCompiler,
    configDevClient.devServer
  )

  const webpackHotMiddleware2 = require('webpack-hot-middleware')(
    clientCompiler,
    configDevClient.devServer
  )

  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddleware)
  // server.use(webpackHotServerMiddleware(compiler))
  console.log('Middleware enabled')

} else {
  const render = require('./render')
  const expressStaticGzip = require('express-static-gzip')
  server.use(expressStaticGzip('dist', {
    enableBrotli: true
  }))

  // Another piece of middleware
  server.use('*', render())
}

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
