import express from 'express'
// import path from 'path'
import webpack from 'webpack'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'

import configDevClient from '../../config/webpack.dev-client.js'
import configDevServer from '../../config/webpack.dev-server.js'
import configProdClient from '../../config/webpack.prod-client.js'
import configProdServer from '../../config/webpack.prod-server.js'
const server = express()
const expressStaticGzip = require('express-static-gzip')

const PORT = process.env.PORT || 8080
let isBuilt = false

const done = () => {
  !isBuilt &&
  server.listen(PORT, () => {
    isBuilt = true
    console.log(
      `Server listening on http://localhost:${PORT} in ${
        process.env.NODE_ENV
      }`
    )
  })
}

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
if (isDev) {
  const compiler = webpack([configDevClient, configDevServer])

  const clientCompiler = compiler.compilers[0]
  // const serverCompiler = compiler.compilers[1]

  const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    configDevClient.devServer
  )

  const webpackHotMiddlware = require('webpack-hot-middleware')(
    clientCompiler,
    configDevClient.devServer
  )

  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddlware)

  // ... this is also filtering chunks for us, but in prod we need to implement explicitly
  server.use(webpackHotServerMiddleware(compiler))

  console.log('Middleware enabled')
  compiler.plugin('done', done)

} else {
  webpack([configProdClient, configProdServer]).run((err, stats) => {

    // more logs for production
    console.log(
      stats.toString({
        colors: true
      })
    )

    const render = require('../../build/prod-server-bundle.js').default
    server.use(
      expressStaticGzip('dist', {
        enableBrotli: true
      })
    )

    const clientStats = stats.toJson().children[0]
    server.use(render({ clientStats }))

    done()
  })
}
