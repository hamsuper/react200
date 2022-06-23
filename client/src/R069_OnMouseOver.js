import React, { Component } from 'react'

export default class R069_OnMouseOver extends Component {
  //onMouseOver 이벤트는 특정 tag 영역 안에 마우스 커서가 진입할 때 발생한다.
  mouseOver(tag) {
    console.log('@@@TAG : ' + tag);
  }
  render() {
    return (
		<>
			<div onMouseOver={(e) => this.mouseOver('div')}>
				<h3>div mouse over</h3>
			</div>
			<input type={'text'} onMouseOver={(e) => this.mouseOver('input')} />
			<select onMouseOver={(e) => this.mouseOver('select')}>
				<option value="react">react</option>
				<option value="200">200</option>
			</select>
		</>
	);
  }
}
