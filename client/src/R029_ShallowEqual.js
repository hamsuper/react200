import React, { Component } from 'react';
import { shallowEqualArrays } from 'shallow-equal';

export default class R029_ShallowEqual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string : 'react'
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqualArrays(this.state, nextState)
  }
  componentDidMount() {
    const object = { react: '200' };
    const Array1 = ['리액트', object];
    const Array2 = ['리액트', object];
    const Array3 = ['리액트', { react: '200' }];

    console.log('Array1 & Array2 두 배열을 비교 : ' + shallowEqualArrays(Array1, Array2));
    console.log('Array2 & Array3 두 배열을 비교 : ' + shallowEqualArrays(Array2, Array3));
    this.setState({ string: 'react' })
    console.log('state & setState 비교 : ' + shallowEqualArrays(this.state, this.setState));
  }
  render() {
    console.log('렌더링')
    return (
      <div>R029_ShallowEqual : { this.state.string }</div>
    )
  }
}
