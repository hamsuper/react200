import React, { Component } from 'react'

export default class R066_OnClick extends Component {
  //cancelCase 사용(html에서는 onclick으로 모두 소문자로 사용)
  //onClick 이벤트는 특정 element가 클릭됐을 때 정의된 함수를 호출하는 방식으로 사용한다.
  buttonClick = (param) => {
    if (typeof param != 'string') param = 'Click a'; //param 변수가 문자열이 아니라면 'Click a'라는 문자열을 param 변수에 할당한다.
    console.log('@@@param,' + param); //param 변수를 로그로 출력한다.
  }
  render() {
    return (
		<div>
			<button onClick={(e) => this.buttonClick('Click button')}>Click button</button>
			<div onClick={(e) => this.buttonClick('Click div')}>Click div</div>
			<a href="javascript:" onClick={this.buttonClick}>
				Click a
			</a>
		</div>
	);
  }
}
