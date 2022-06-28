import React, { Component } from 'react';
import { add } from './actions'; // actions 폴더 경로를 임포트한다. actions 폴더의 index.js 파일에는 add라는 함수가 있다.

export default class StrAddButton extends Component {
	// 버튼을 클릭하면 addString 함수를 실행한다.
	render() {
		return <input value="add200" type="butotn" onClick={this.addString} />;
	}

	addString = () => {
    this.props.store.dispatch(add());
    // dispatch 함수를 통해 add함수의 반환 값을 스토어에 전달한다.
    // add함수의 type 값을 리듀서(reduces 폴더의 Index.js)에서 참고해 스토어 데이터를 변경한다.
    // dispatch 함수는 리듀서에서 액션을 전달하고 리듀서에서는 액션에 적성된 작업 내용을 읽어 스토어 데이터를 변경한다. 
	};
}
