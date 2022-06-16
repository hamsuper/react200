import React, { Component } from 'react'
import datatype from 'prop-types';

export default class R020_PropsObjVal extends Component {
  render() {
    let { ObjectJson } = this.props;

    return (
      <div style={{padding:0}}>{JSON.stringify(ObjectJson)}</div>
    )
  }
}

R020_PropsObjVal.propTypes = {
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number
  })
}
