import React, { Component } from 'react'

export default class R071_OnKey extends Component {
  //onKeyDown와 onKeyPress는 키를 눌렀을때 동작
  //onKeyUp은 눌려있던 키에서 손을 뗐을때 동작
  //onKeyPress는 onKeyDown과 달리, 문자가 실제로 입력됐을 때 반응한다.
  onKey(event, e) {
    let val = e.target.value;
    console.log('event: ' + event + ', value: ' + val)
  }
  render() {
    // 첫 번째 출력에 공백이 출력되는 이유는 키가 눌렸을때 onKeyDown, onKeyPress 이벤트가 발생하고 input 태그의 value값이 할당되기 때문이다. 
    // input 태그에 입력된 a가 value에 할당되고 키가 떼어졌을 때 onKeyUp 이벤트가 발생하기 때문에 첫 번 째 출력이 나타난다. 
    return (
		<>
			onKeyDown : <input type="text" onKeyDown={(e) => this.onKey('onKeyDown', e)} />
			onKeyPress : <input type="text" onKeyPress={(e) => this.onKey('onKeyPress', e)} />
			onKeyUp : <input type="text" onKeyUp={(e) => this.onKey('onKeyUp', e)} />
		</>
	);
  }
}
