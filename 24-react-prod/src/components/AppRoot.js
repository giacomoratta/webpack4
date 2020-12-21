import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  climb() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className="profile">
        <img src={require("../images/link.jpg")} />
        <h1>{this.props.heading}</h1>
        <div className="content">{this.props.bioText}</div>
      </div>
    )
  }
}