require('babel-runtime/regenerator')

// set websocket connection for hot reloading
// 'reload=true' option for client (=browser) reloading
require('webpack-hot-middleware/client?reload=true')

require('./main.sass')
require('./index.html')

// debugger;