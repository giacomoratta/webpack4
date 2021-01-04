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

  componentDidMount () {
    // dispatch comes from connect (see below)
    // unfortunately... it will only works once (unless press F5)
    this.props.dispatch(fetchArticle(
      this.props.site,
      this.props.match.params.slug
    ))
  }

  render () {
    // const siteConfig = require(`../../data/${this.props.site}/siteConfig`)
    import(`../css/${this.props.site}/theme.css`)

    try {
      // const MarkdownData = require(`../../data/${this.props.site}/${this.props.match.params.slug}.md`)
      // const posterStyle = {
      //   backgroundImage: `url(${MarkdownData.posterImage})`
      // }

      return (
        <div>
          <div className='Article'>
            <h1>{this.props.__content}</h1>
            <div
              className='content'
              dangerouslySetInnerHTML={{ __html: this.props.__content }}
            />
          </div>
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
    __content: state.content
  }
})(Article)
