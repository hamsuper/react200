import React, { Component } from 'react'

export default class R065_Promise extends Component {
  //Promise의 상태가 대기, 이행, 거부 중 거부 상태가 됐을 때 catch 함수를 실행한다.
  //대기 상태의 Promise에 에러가 발생해 이행으로 상태 변화를 하지 못하는 경우다.
  //Promise라는 객체를 생성해 promise를 사용한다. resolve는 이행 함수, reject는 거부 함수로 사용된다.
  //거부 함수 reject를 실행하면서 Error 객체를 사용해 에러를 발생시킨다.
  //promise 동작 중 거부 함수가 실행되면, 이행 상태가 되지 못하기 때문에 then 함수는 실행되지 않는다.
  //promise 의 상태가 거부로 변하면서 catch 함수가 실행된다. reject 함수에서 파라미터로 전달받은 에러 정보를 출력한다.

  componentDidMount() {
    new Promise((resolve, reject) => {
      reject(Error('ERROR Info'));
    })
      .then(result => console.log('then ' + result))
      .catch(result => console.log('catch ' + result));
  }
  render() {
    return (
      <div>R065_Promise</div>
    )
  }
}
