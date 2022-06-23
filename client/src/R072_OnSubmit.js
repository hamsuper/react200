import React, { Component } from 'react'

export default class R072_OnSubmit extends Component {
  // onSubmit 이벤트는 <form> 태그에 사용한다. form 안에 있는 type이 submit인 input 태그를 클릭하거나 input 태그에 커서를 놓고 엔터를 누르면 onSubmit 이벤트가 발생한다. 
  
  submit(e) {
		let inputValue = document.getElementById('inputId').value; // id값이 inputId인 태그의 value값을 inputValue 변수에 할당한다.
		console.log('inputValue : ' + inputValue);
		e.preventDefault(); // 이벤트 객체 e에 preventDefault 함수를 실행하면 submit 이후에 페이지 새로고침을 방지할 수 있다.
  }
  render() {
    return (
		<>
			<form onSubmit={this.submit}>
				<input type={'text'} name="inputName" id="inputId" />
				<input type={'submit'} value='submit' />
			</form>
		</>
	);
  }
}
