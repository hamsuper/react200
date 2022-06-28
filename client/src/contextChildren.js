import React, { Component } from 'react'
import ContextChildren2 from './contextChildren2';

// 부모 컴포넌트(R076_ContextApi)의 데이터를 사용하지 않고 손자 컴포넌트(contextchildren2)를 리턴한다. 
export default class ContextChildren extends Component {
  render() {
    return <ContextChildren2 />;
  }
}
