import React, { Component } from 'react'

export default class R014_ForEach extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { 
    var For_arr = [3, 2, 8, 8];
    var For_newArr = [];

    for (let i = 0; i < For_arr.length; i++) {
      For_newArr.push(For_arr[i]);
    }
    console.log(`1. For_newArr: [${For_newArr}]`);

    let ForEach_Arr = [3, 3, 9, 8];
    let ForEach_newArr = [];

    ForEach_Arr.forEach((result) => {
      ForEach_newArr.push(result);
    });
    console.log(`2. ForEach_newArr: [${ForEach_newArr}]`);
  }
  
  render() {
    return (
      <div>R014_ForEach</div>
    )
  }
}
