import React, { Component } from 'react'

export default class R070_OnMouseOut extends Component {
  // onMouseOut 이벤트는 특정 tag 영역 안에 마우스 커서가 진입했다가 벗어날 때 발생한다.
  mouseOut(tag) {
    console.log('@TAG : ' + tag);
  }
  render() {
    return (
		<>
			<div onMouseOut={(e) => this.mouseOut('div')}>
				<h3>div mouse over</h3>
			</div>
			<input type={'text'} onMouseOut={(e) => this.mouseOut('input')} />
			<select onMouseOut={(e) => this.mouseOut('select')}>
				<option value="react">react</option>
				<option value="200">200</option>
			</select>
		</>
	);
  }
}
