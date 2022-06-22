import React, { Component } from 'react'

export default class R064_Promise extends Component {
  //promise는 콜백 함수와 같이 비동기적으로 동작하는 코드를 동기적으로 구현할 때 사용한다.
  //콜백 함수와 달리, 코드 가독성을 높일 수 있고 예외 처리도 쉽게 할 수 있다.
  //대기, 이행, 거부
  //대기에서 이행 상태로 변할 때 then() 함수 안의 코드가 실행된다.
  //promise then() 함수를 사용하면 코드를 콜백 함수의 계단식 코드 형태보다 가독성 있게 구현할 수 있다.

  componentDidMount() {
    new Promise(resolve => { //Promise 라는 객체를 생성해 promise를 사용한다. 파라미터로 하나의 함수 resolve만 받을 경우, 이행 함수로 사용된다.
      setTimeout(function () { //timeout 함수를 실행해 1.5초 후에 resolve 함수가 실행된다. promise는 이행 상태가 되고 then 함수가 실행된다.
        resolve('react');
      }, 1500)
    }).then(function (result) { //resolve 함수에서 파라미터로 전달된 결괏값 react 를 result라는 파라미터로 받아 사용한다.
      console.log(result);
      return result + 300;
    }).then(result => {console.log(result)}) //함수를 화살표 함수로 구현했다. 
  }
  render() {
    return (
      <div>R064_Promise</div>
    )
  }
}
