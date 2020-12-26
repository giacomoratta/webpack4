import React from 'react'
import MarkdownData from '../../data/post.md'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './nav.css'

const Gallery = () => (
  <div>
    <h1>Gallery</h1>
  </div>
)

const Article = () => (
  <div>
    <h1>Article</h1>
  </div>
)

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <Router>
        <div>
          <div className='nav'>
            <Link to='/'>Gallery</Link>
            <Link to='/about'>About</Link>
            <Link to='/article'>Article</Link>
          </div>
          <Route exact path='/' component={Gallery} />
          <Route path='/about' component={About} />
          <Route path='/article' component={Article} />
        </div>
      </Router>
    )
  }
}
