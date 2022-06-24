import React, { Component } from 'react'

export default class R074_ReactCurrying extends Component {
  // 커링은 함수의 재사용성을 높이기 위해 함수 자체를 return하는 함수다. 
  // 함수를 분리할 수 있으므로 파라미터도 나눠 전달할 수 있다.

  plusNumOrString(c, d) { // 파라미터로 전달된 c, d를 더해주는 함수 
    return c + d; // + 연산자는 숫자와 문자열에서 사용할 수 있다.
  }

  PlusFunc1(a) {
		// this.plusNumOrString(a, b)를 return하는 또 다른 함수를 return 한다.
		return function (b) {
			return this.plusNumOrString(a, b); //return a + b
		}.bind(this);
  }

  PlusFunc2 = a => b => this.plusNumOrString(a, b)
  // PlusFunc1 함수를 화살표 함수로 간단하게 표현한 것. 

  PlusFunc(a) {
    return this.PlusFunc1(a)(200)
  }
  // 파라미터를 1개(a)만 받는다. PlusFunc1 함수를 호출할 때 변수 a와 상수 200을 파라미터로 함께 전달한다.

  render() {
		// this.PlusFunc(100)
		// PlusFunc 함수를 호출하면서 숫자 100과 문자열 react를 전달한다.
		// 고정으로 더해주는 숫자 200은 파라미터로 넣어주기 때문에 PlusFunc 함수를 호출할 때 각각 200을 전달하지 않아도 된다.
    // 버튼을 클릭했을때 100 + 200 결과인 300, react + 200 결과인 react200이 표시된다.
		return (
			<>
				<input type="button" value="NumberPlus" onClick={(e) => console.log(this.PlusFunc(100))} />
				<input type="button" value="StringPlus" onClick={(e) => console.log(this.PlusFunc('react'))} />
			</>
		);
  }
}
