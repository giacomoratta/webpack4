import React from 'react'
import '../css/Article.css'

export default (props) => {

  const siteConfig = require(`../../data/${props.site}/siteConfig`)
  const MarkdownData = require(`../../data/${props.site}/${props.match.params.slug}.md`)

  import(`../css/${props.site}/theme.css`)

  const posterStyle = {
    backgroundImage: `url(${MarkdownData.posterImage})`
  }

  return (
    <div>
      <div className='Article'>
        <h1>{MarkdownData.title}</h1>
        <div className='poster' style={posterStyle} />
        <div
          className='content'
          dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
        />
      </div>
    </div>
  )
}
