import React, { Component } from 'react'
import withHocComponent from './withHocComponent'

class R075_ReactHoc extends React.Component {
  // 커링과 같이 함수 자체를 인자로 받거나 반환하는 함수를 '고차 함수'라고 한다.
  // 컴포넌트를 인자로 받거나 반환하는 함수를 '고차 컴포넌트(Higher-Order Component)'라고 한다.

  render() {
    // render 함수가 실행되면, 로그를 출력하고 props에 있는 name 변수를 화면에 그려준다. 
    // widthHocComponent 컴포넌트를 호출하면서 R075_ReactHoc 컴포넌트와 컴포넌트명을 파라미터로 넘긴다. 
    // R075_ReactHoc 컴포넌트는 export 되지 않기 때문에 render 함수가 실행되지 않는다.
    console.log('2. HocComponent render')

    return (
      <div>props.name : {this.props.name}</div>
    )
  }
}
export default withHocComponent(R075_ReactHoc, 'R075_ReactHoc')
