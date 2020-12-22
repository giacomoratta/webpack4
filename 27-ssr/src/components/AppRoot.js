import React from 'react'
// import MarkdownData from '../../data/post.md'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render1 () {
    return (
      <div className='profile'>
        <img src={require('../images/link.jpg')} />
        <h1>{MarkdownData.title}</h1>
        <h2>{MarkdownData.author}</h2>
        <div className='content' dangerouslySetInnerHTML={{ __html: MarkdownData.__content }} />
      </div>
    )
  }

  render () {
    return (
      <div className='profile'>
        <img src={""} />
        <h1>{"Title"}</h1>
        <div className='content' dangerouslySetInnerHTML={{ __html: "<h1>Heading</h1>" }} />
      </div>
    )
  }
}
