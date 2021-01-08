import React from 'react'
import ReactDOM from 'react-dom'
import AppRoot from './components/AppRoot'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore(window.INITIAL_STATE || {})

function render (Component) {
  ReactDOM.hydrate(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('react-root')
  )
}

// store.dispatch(actionTest('New text')) // not-needed anymore

render(AppRoot)

if (module.hot) {
  module.hot.accept('./components/AppRoot.js', () => {
    const NewAppRoot = require('./components/AppRoot.js').default
    render(NewAppRoot)
  })
}
