import React, { Component } from 'react'
import R077_ContextChildren from './R077_ContextChildren'

const { Provider, Consumer } = React.createContext();
export { Consumer };

export default class R077_ContextApi extends Component {
  // 컨텍스트로 부모 데이터 변경하기 
  // 컨텍스트를 사용하면 자식 컴포넌트에서 부모 컴포넌트의 데이터를 변경할 수 있다.

  constructor(props) {
    super(props);
    this.setStateFunc = this.setStateFunc.bind(this);
  }

  setStateFunc(value) {
    this.setState({ name: value }); // state 변수 name에 파라미터 value를 선언한다.
  }

  render() {
    const content = {
      ...this.state,
      setStateFunc: this.setStateFunc,
    } // content 변수에 R077_ContentApi 컴포넌트의 state와 setStateFunc 함수를 할당한다. 

    return (
      <Provider value={content}> {/* 자식 컴포넌트를 Provider 태그로 감싸고 전달할 데이터인 content를 value 값으로 할당한다. */}
        <R077_ContextChildren />
      </Provider>
    )
  }
}
