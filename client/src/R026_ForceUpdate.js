import React, { Component } from 'react'

export default class R026_ForceUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateChange : '리액트',
    }
  }

  change () {
    this.state.stateChange = 'react';
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <button type="button" onClick={(e) => this.change(e)}>state 직접 변경</button>
        <p>변경되어야 할 단어: {this.state.stateChange}</p>
      </div>
    )
  }
}
