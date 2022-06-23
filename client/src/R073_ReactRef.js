import React, { Component } from 'react'

export default class R073_ReactRef extends Component {
  // Ref는 'reference'의 약자로, '참조'라는 뜻이다.
  // element가 참조하는 변수에 접근해 변경하고 element를 제어할 수 있다.

  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); //createRef 함수로 Ref 변수 inputRef를 생성한다.
  }

  RefFocus = (e) => {
    this.inputRef.current.focus();
    console.log('RefFocus', this.inputRef.current);
  }

  JavascriptFocus() {
    document.getElementById('id').focus();
    console.log('JavascriptFocus', document.getElementById('id'));
  }

  render() {
    // element에 ref 속성을 추가하고 Ref 변수에 inputRef를 할당해 참조하도록 한다. 이때 참조에 대한 정보가 ref의 current라는 속성에 할당된다. 
    // 버튼을 클릭하면 RefFocus 함수가 실행된다. input text 태그가 참조하고 있는 inputRef.current에 접근해 focus 이벤트를 발생시킨다.
    return (
		<>
			<input id="id" type="text" ref={this.inputRef} />
      <input type="button" value="Ref Focus" onClick={this.RefFocus} />
      <input type='button' value='Javascript Focus' onClick={this.JavascriptFocus} />
		</>
	);
  }
}
