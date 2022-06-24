import React, { Component } from 'react'

export default function withHocComponent(InComponent, InComponentName) {
  // R075_ReactHoc 컴포넌트에서 withHocComponent 컴포넌트를 export 하면서 전달한 파라미터를 받는다.
  // 파라미터로 전달받은 InComponent 변수는 R075_ReactHoc 컴포넌트 자체다.
  // R075_ReactHoc 컴포넌트를 return하면서 props값을 전달한다.
  // props에는 App.js에서 전달한 name 변수가 있다.
  // 컴포넌트가 return되면 R075_ReactHoc 컴포넌트의 render 함수가 실행되고 props.name 값이 화면에 출력된다.
  // render 함수가 실행된 후 파라미터로 전달받은 컴포넌트명 InComponentName 변수를 로그로 출력한다.

  // 하이오더 컴포넌트를 구현하면, 여러 컴포넌트에 동일하게 적용돼야 하는 공통 기능을 코드 중복 없이 사용할 수 있다.
  // 예를 들어 1번 로그를 모든 컴포넌트에서 출력해야하는데, hoc를 구현하지 않았다면 각각의 컴포넌트에서 동일한 코드를 작성해야 한다.
  return class OutComponent extends React.Component {
    componentDidMount() {
      console.log(`3. InComponentName : ${InComponentName}`);
    }

    render() {
      console.log('1. Incomponent render')
      return (
        <InComponent {...this.props} />
      )
    }
  }
}
