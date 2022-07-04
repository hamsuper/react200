import React, { Component } from 'react'

export default class R110_ApiGetJson extends Component {
  componentDidMount = async () => {
    const response = await fetch('/users');
    const body = await response.json();
    console.log('body.message :' + body.message)
  }
  render() {
    return (
      <div>R110_ApiGetJson</div>
    )
  }
}
