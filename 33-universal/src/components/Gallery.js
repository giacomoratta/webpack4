import React from 'react'

const getBundle = () => {
  // no magic comments anymore >> /* webpackChunkName: "lodash" */
  // ...thanks to babel plugin 'universal-import'
  import('lodash').then(_ => {
    console.log('imported', _)
  })
}

export default () => (
  <div>
    <h1 onClick={getBundle}>Gallery</h1>
  </div>
)
