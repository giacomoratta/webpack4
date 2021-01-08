import React from 'react'
import '../css/Article.css'
import NotFound from './NotFound'
import { connect } from 'react-redux'
import { fetchArticle } from '../actions'

// set as stateful component

class Article extends React.Component {
  constructor (props) {
    super(props)
  }

  // componentDidMount () {
  //   // dispatch comes from connect (see below)
  //   // unfortunately... it will only works once (unless press F5)
  //   this.props.dispatch(fetchArticle(
  //     this.props.site,
  //     this.props.match.params.slug
  //   ))
  // }

  componentWillReceiveProps(props) {
    props.dispatch(fetchArticle(
         props.site,
         props.match.params.slug
    ))
  }

  render () {
    try {
      const billboardStyle = {
        backgroundImage: `url(${this.props.posterImage})`
      }

      import(`../css/${this.props.site}/theme.css`)
      return (
        <div className='Article'>
          <div className='billboard' style={billboardStyle} />
          <h1>{this.props.title}</h1>
          <div
            className='content'
            dangerouslySetInnerHTML={{ __html: this.props.__content }}
          />
        </div>
      )
    } catch (error) {
      return <NotFound />
    }
  }
}

export default connect((state) => {
  /* return all props used by the component */
  return {
    ...state.content // spread the content json over the props
  }
})(Article)
