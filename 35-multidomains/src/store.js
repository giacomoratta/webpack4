import { createStore, compose, applyMiddleware } from 'redux'
import { fetchArticle } from './reducers'
import thunk from 'redux-thunk'

const preloadedState = {}

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

// export default createStore(fetchArticle, enhancer)

/* This is just a bit of logic for devtools.
Otherwise, the store would be created as:
export default createStore(fetchArticle, compose(applyMiddleware(thunk)))
*/

export default initialState => {
  const store = createStore(fetchArticle, preloadedState, enhancer)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').fetchArticle)
      // ... or use combineReducers in case of multiple reducers (which is the normal situation!)
    })
  }

  return store
}
