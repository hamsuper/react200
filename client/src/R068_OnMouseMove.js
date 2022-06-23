import React, { Component } from 'react'

export default class R068_OnMouseMove extends Component {
  //onMouseMove 이벤트는 특정 tag 영역 안에서 마우스 커서가 움직일 때 발생한다.
  mouseMove(tag) { //전달받은 파라미터를 tag라는 함수의 내부 변수에 넣어 사용한다. 
    console.log('@@@Tag : ' + tag);
  }
  render() {
    return (
		<>
			<div onMouseMove={(e) => this.mouseMove('div')}>
				<h3>div mouse move</h3>
			</div>
			<input type={'text'} onMouseMove={(e) => this.mouseMove('input')} />
			<select onMouseMove={(e) => this.mouseMove('select')}>
				<option value="react">react</option>
				<option value="200">200</option>
			</select>
		</>
	);
  }
}
