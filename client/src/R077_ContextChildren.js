import React, { Component } from 'react'
import { Consumer } from './R077_ContextApi'

export default class R077_ContextChildren extends Component {
  render() {
    return (
      <Consumer>
			{/* Consuer 태그로 출력할 element를 감싸고 R077_ContextApi 컴포넌트에서 value에 할당했던 데이터를 contextValue 변수로 받아 사용한다. */}
			{(contextValue) => (
        <button onClick={(e) => contextValue.setStateFunc('react200')}>{contextValue.name}_button</button>
				// 버튼을 클릭하면, 파라미터로 전달받은 R077_ContextApi 컴포넌트의 setStateFunc('react200')을 호출한다. 
			)}
		</Consumer>
	);
  }
}
