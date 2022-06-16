import React, { Component } from 'react'

export default class R023_PropsNode extends Component {
  render() {
    console.log(this.props)
    return (
      <div style={{padding:0}}>{this.props.children}</div>
    )
  }
}
