import React, { Component } from 'react'

export default class R067_OnChange extends Component {
  //onChange 이벤트는 특정 element에 변화가 생겼을 때 정의된 함수를 호출하는 방식으로 사용한다.
  change = (e) => { //전달받은 파라미터를 e라는 함수의 내부 변수에 넣어 사용한다.
    let val = e.target.value; //이벤트 객체 변수 e에 target 속성을 붙여 value값을 val 변수에 할당한다.
    console.log('@@@param, ' + val); //val 변수의 로그를 찍는다.
  }
  render() {
		//문자를 입력하거나 삭제할때마다 onChange 이벤트가 발생해 change 함수를 호출한다. 
    //함수 호출 시 파라미터를 따로 넘겨주지 않아도 이벤트 객체(e) 가 전달된다.

		return (
			<>
				<input type="text" onChange={this.change} />
				<select onChange={this.change}>
					<option value={'react'}>react</option>
					<option value={'200'}>200</option>
				</select>
			</>
		);
  }
}
