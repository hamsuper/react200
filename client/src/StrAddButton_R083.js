import React, { Component } from 'react';
import { connect } from 'react-redux'; // react-redux 패키지에서 connect 함수를 임포트해 사용할 수 있도록 한다.
import { add } from './actions'; // actions 폴더 경로를 임포트한다. actions 폴더의 index.js 파일에는 add라는 함수가 있다.

class StrAddButton extends Component {
	// 버튼을 클릭하면 addString 함수를 실행한다.
	render() {
    return (
		// <input value="add200" type="button" onClick={this.addString} />
		<input value="add200" type="button" onClick={this.props.addString} />
	);
	}

	// addString = () => {
  //   this.props.store.dispatch(add());
  //   // dispatch 함수를 통해 add함수의 반환 값을 스토어에 전달한다.
  //   // add함수의 type 값을 리듀서(reduces 폴더의 Index.js)에서 참고해 스토어 데이터를 변경한다.
  //   // dispatch 함수는 리듀서에서 액션을 전달하고 리듀서에서는 액션에 적성된 작업 내용을 읽어 스토어 데이터를 변경한다. 
	// };
}

let mapDispatchToProps = (dispatch, props) => {
  console.log('Props from App.js : ' + props.AppProp)
  return {
    addString: () => dispatch(add())
  }
}
// mapDispatchToProps 함수는 첫 번째 파라미터로 dispatch 함수를, 두 번째 파라미터로 부모 컴포넌트에서 전달한 props 변수를 받는다. 
// App.js에서 전달한 props 변수 AppProp을 콘솔에 출력한다.
// dispatch 함수를 컴포넌트 내 함수인 addString에 바인딩 한다. 이때 addString 함수는 props에 할당한다. 

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);
// connect 함수의 두 번째 파라미터는 mapDispatchToProps 함수로, 리듀서에 액션을 전달하는 함수인 dispatch를 인자로 받아 사용할 수 있다. 

export default StrAddButton;
