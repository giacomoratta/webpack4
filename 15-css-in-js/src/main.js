require('babel-runtime/regenerator')
require('react-hot-loader/patch')

// set websocket connection for hot reloading
// 'reload=true' option for client (=browser) reloading
require('webpack-hot-middleware/client?reload=true')


require('./app.js')
require('./main.css')
require('./index.html')

// debugger;