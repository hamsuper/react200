import React, { Component } from 'react'

export default class R059_FetchGet extends Component {
  componentDidMount = async () => { 
    const response = await fetch('http://date.jsontest.com/');
    const body = await response.json(); //response는 json 형태이기 때문에 json() 함수로 사용할 수 있도록 변환한다.
    alert(body.date);
    console.log(body)
    //async - 비동기 함수를 실행하는 함수에 추가 
    //await - 동기적으로 처리돼야 하는 함수 구문 앞에 추가, await을 안붙이면 fetch함수의 비동기적 특징 때문에 에러가 발생할 수 있다.
  }
  render() {
    return (
      <h1>R059_FetchGet</h1>
    )
  }
}
