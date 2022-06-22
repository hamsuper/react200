import React, { Component } from 'react'

export default class R063_CallbackFunc extends Component {
  //자바스크립트는 비동기적으로 동작한다. 먼저 실행된 작업이 끝나지 않았더라도 다음 작업이 시작될 수 있다.
  //콜백 함수를 이용하면 특정 코드에 순서를 정해 원하는 시점에 실행할 수 있다.

  componentDidMount() {
    console.log('this1', this);
		this.logPrint(
			1,
			function (return1) {
				//logPrint라는 함수를 호출하는데 파라미터로 1과 함수를 전달한다.
        console.log('return1: ' + return1);
        console.log('this2', this);
				this.logPrint(return1, function (return2) { //첫 번째 함수 실행에서 반환된 return1 값 2를 파라미터로 전달한다.
          console.log('return2: ' + return2);
          console.log('this3', this);
        });
			}.bind(this) //함수 밖의 this를 함수 안에서도 동일하게 사용하기 위하여 붙여준다.
    ); //callback 함수
    //원하는 순서대로 코드를 실행
    //1을 파라미터로 넣고 함수를 호출했고 2를 반환할때까지 기다렸다가 다시 logPrint 함수를 호출했다.
    //콜백 함수가 증가할수록 함수 안에 또 다른 함수를 계속 추가해야 한다. (콜백 지옥)
    //콜백 함수를 여러 번 사용할수록 코드가 더 지저분해진다는 단점이 있다.
  }

  logPrint(param, callback) { 
    console.log('logPrint param: ' + param);
    param += param; //logPrint 함수는 전달받은 파라미터 param에 자기자신 1을 더해 2를 할당한다. 
    callback(param); //2가 된 param 변수를 callback 함수에 다시 파라미터로 넣고 함수를 실행한다. 
  }
  render() {
    return (
      <div>R063_CallbackFunc</div>
    )
  }
}
