import React, { Component } from 'react'

export default class R109_reactProxy extends Component {
  componentDidMount = async () => {
    const response = await fetch('/users');
    const body = await response.text();
    console.log('body: ' + body);
  }

  render() {
    return (
      <div>R109_reactProxy</div>
    )
  }
}
