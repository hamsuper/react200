import React, { Component } from 'react'
import ContextChildren from './contextChildren';

const { Provider, Consumer } = React.createContext();
// 리액트 기본 제공 함수 createContext() 함수를 호출하고 Provider, Consumer를 받아 사용할 수 있도록 한다.
// 컨텍스트를 사용하면 하위 컴포넌트가 여러개인 구조에서 유용하게 사용할 수 있다. 몇 번째 하위 컴포넌트인지와는 상관없이 필요한 하위 컴포넌트에서 소비자를 임포트해 필요한 데이터를 사용할 수 있다.

export { Consumer }
// 하위 컴포넌트에서 소비자를 사용할 수 있도록 export 한다. 

export default class R076_ContextApi extends Component {
  // 컨텍스트는 데이터의 공급자와 소비자를 정의하고 데이터가 필요한 컴포넌트만 사용할 수 있게 구현할 수 있다.
  render() {
    return (
		<Provider value="React200">
			{' '}
			{/* 자식 컴포넌트를 Provider(공급자)로 감싸고 전달할 데이터를 value 값으로 할당한다. */}
			<ContextChildren />
		</Provider>
	);
  }
}
