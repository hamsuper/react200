import React, { Component } from 'react'
import { Consumer } from './R076_ContextApi' //부모 컴포넌트의 데이터를 사용하기 위해 R076_ContextApi 컴포넌트에서 export 했던 Consumer를 import해 사용할 수 있게 한다.

export default class ContextChildren2 extends Component {
  render() {
    return (
      <Consumer>
        {contextValue => <h3>{`contextValue : ${contextValue}`}</h3>}
        {/* <Consumer> 태그로 출력할 element를 감싸고 R076_ContextApi 컴포넌트에서 value에 할당했던 데이터를 contextValue 변수로 받아 출력한다. */}
      </Consumer>
    )
  }
}
