import React from 'react'
import styles from './main.css' // see query.modules=true (webpack config)
import { css } from 'emotion'
import styled from '@emotion/styled'

const FancyH1 = styled('h1')`
  color: ${props => (props.wild ? 'hotpink' : 'gold')}
`

const red = '#f00'
const className = css`
  color: ${red};
  font-size: 5em;
`
// it's like css(`...`)

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
    const isWild = this.state.count % 2 === 0
    return (
      <div className={styles.counter}
        onClick={this.climb.bind(this)}>
        <FancyH1 className={className} wild={isWild}>Counter: {this.state.count}</FancyH1>
      </div>
    )
  }
}
