import React from 'react'
import styles from './main.css' // see query.modules=true (webpack config)

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  climb() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className={styles.counter}
        onClick={this.climb.bind(this)}>
        <h1>Counter: {this.state.count}</h1>
      </div>
    )
  }
}
