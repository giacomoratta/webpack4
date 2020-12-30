import React from 'react'
import '../css/Article.css'
import NotFound from './NotFound'
import { connect } from 'react-redux'

const Article = (props) => {
  const siteConfig = require(`../../data/${props.site}/siteConfig`)
  import(`../css/${props.site}/theme.css`)

  try {
    // const MarkdownData = require(`../../data/${props.site}/${props.match.params.slug}.md`)
    // const posterStyle = {
    //   backgroundImage: `url(${MarkdownData.posterImage})`
    // }

    return (
      <div>
        <div className='Article'>
          <h1>{props.title}</h1>
          <div
            className='content'
            dangerouslySetInnerHTML={{ __html: props.__content }}
          />
        </div>
      </div>
    )
  } catch (error) {
    return <NotFound />
  }
}

export default connect((state) => {
  /* return all props used by the component */
  return {
    title: state.text,
    __content: state.text
  }
})(Article)