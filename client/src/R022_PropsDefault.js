import React, { Component } from 'react'

export default class R022_PropsDefault extends Component {
  render() {
    let { ReactString, ReactNumber } = this.props;

    return (
      <div style={{ padding: 0 }}>
        {ReactString}{ReactNumber}
      </div>
    )
  }
}

R022_PropsDefault.defaultProps = {
  ReactString: '리액트',
  ReactNumber: 400
}
