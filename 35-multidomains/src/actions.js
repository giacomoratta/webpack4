import fetch from 'cross-fetch'

export const actionTest = (text) => {
  return {
    type: 'TEST_ACTION',
    text
  }
}

export const fetchArticle = (site, slug) => {
  // dispatch from the store
  // this is what redux-thunk add
  return (dispatch) => {
    if (!site || !slug) return
    fetch(`http://${site}.local:8080/api/articles/${slug}`)
      .then(res => res.json()) // res.json() returns a Promise
      .then(data => dispatch(fetchSuccess(data)))
      .catch(err => dispatch(fetchFailure(err)))
  }
  // fetchSuccess and fetchFailure will update the state as normal action does
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const fetchSuccess = (response) => {
  return {
    type: FETCH_SUCCESS,
    payload: response
  }
}

export const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error
  }
}
