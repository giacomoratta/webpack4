import express from 'express'
import path from 'path'

const server = express()

// 1. express with no routes shows in browser "Cannot GET /"

// 4. set the automatic-rebuild webpack provides
const webpack = require('webpack')
const webpackConfig = require('../../config/webpack.dev.js')
const webpackCompiler = webpack(webpackConfig)
const webpackMiddleware = require('webpack-dev-middleware')(
  webpackCompiler,
  webpackConfig.devServer
)
server.use(webpackMiddleware)

// 5. set the hot-reload webpack provides
//    -> some changes needed in config/webpack.dev.js
//    -> some changes needed in src/main.js
const webpackHotMiddleware = require('webpack-hot-middleware')(
  webpackCompiler
)
server.use(webpackHotMiddleware)

// 2. set express to serve from dist folder
const staticMiddleware = express.static('dist')

// 3. set middleware on express
server.use(staticMiddleware)
server.listen(8080, () => {
  console.log('Server is listening...')
})
