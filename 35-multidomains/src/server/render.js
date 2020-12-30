import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Routes from '../components/Routes'
import { Provider } from 'react-redux'
import store from '../store'

import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'

export default ({ clientStats }) => (req, res) => {
  const context = {
    site: req.hostname.split('.')[0]
  }

  const app = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  )

  const names = flushChunkNames().concat([`css/${context.site}-theme-css`])
  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: names
  })

  res.send(`
    <html>
      <head>
        ${styles}
      </head>
      <body>
        <div id="react-root">${app}</div>
        ${cssHash}
        ${js}
      </body>
    </html>
  `)
}
