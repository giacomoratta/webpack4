import { createStore, compose, applyMiddleware } from 'redux'
import { fetchArticle } from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

export default createStore(fetchArticle, enhancer)

/* This is just a bit of logic for devtools.
Otherwise, the store would be created as:

export default createStore(fetchArticle, compose(applyMiddleware(thunk)))
*/
