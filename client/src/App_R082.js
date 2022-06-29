import React, { Component } from 'react';
import { connect } from 'react-redux';
import StrAddButton from './StrAddButton' // 버튼 컴포넌트인 StrAddButton을 임포트해 사용할 수 있도록 한다. 

class App extends Component {
  render() {
    console.log('props', this.props);

		return (
			<div>
				<h1>Start React 200!</h1>
				{/* <span>{this.props.store.getState().data.str}</span> */}
        <span>{this.props.str}</span>
        {/* str 변수로 할당한 값을 출력한다. redux를 사용하던 코드보다 짧아진 것을 확인 할 수 있다. 접근하는 스토어 변수가 많을수록 코드 효율이 더 좋아진다. */}
				<br />{' '}
				{/* props를 통해 index에서 전달받은 store에 접근한다. 스토어 state 데이터에서 str 변숫값을 가져온다. */}
        {/* <StrAddButton store={this.props.store} /> */}
        <StrAddButton AppProp="200" />
        {/* 하위 버튼 컴포넌트에 store를 props로 다시 전달했지만, Index.js에서 Provider를 사용했기 때문에 전달하지 않아도 된다. */}
			</div>
		);
	}
}

let mapStateToProps = (state, props) => {
  console.log('Props from index.js : ' + props.indexProps)
  return {
    str: state.data.str,
  }
} // mapStateToProps 함수는 첫 번째 파라미터로 스토어의 state 변수를, 두 번째 파라미터로 부모 컴포넌트에서 전달한 props 변수를 받는다. 
// index.js에서 전달한 props 변수 indexProps를 콘솔에 출력한다. 
// 스토어의 state 변수 str 값을 App 컴포넌트 props의 str 변수로 할당한다. 

App = connect(mapStateToProps, null)(App);
// connect() 함수의 첫 번째 파라미터는 mapStateToProps 함수로, 스토어의 state 값에 접근 할 수 있다.

export default App;
