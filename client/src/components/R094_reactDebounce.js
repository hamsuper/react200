import React, { Component } from 'react'
import { debounce } from 'lodash';

export default class R094_reactDebounce extends Component {
  debounceFunc = debounce(() => {
    console.log('Debounce API Call')
  }, 1000);

  render() {
    return (
      <>
        <h1>검색어 입력</h1>
        <input type='text' onChange={this.debounceFunc} />
      </>
    )
  }
}
