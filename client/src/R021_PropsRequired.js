import React, { Component } from 'react';
import datatype from 'prop-types';

export default class R021_PropsRequired extends Component {
  render() {
    let { ReactString, ReactNumber } = this.props;

    return <div style={{ padding: 0 }}>{ReactString}{ReactNumber}</div>;
  }
}

R021_PropsRequired.propTypes = {
  ReactString: datatype.isRequired,
}