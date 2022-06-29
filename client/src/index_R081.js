import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'; //redux 패키지에서 스토어 생성 함수 createStore()를 임포트해 사용할 수 있도록 한다.
import { Provider } from 'react-redux'; // store 상속을 위해 react-redux의 Provider를 임포트해 사용할 수 있도록 한다.
import reducers from './reducers';

const store = createStore(reducers);
console.log('store', store);
// createStore 함수의 파라미터로 reducers 폴더 경로를 넘긴다.
// reducers 폴더의 index.js에는 데이터 초깃값을 설정하고 데이터를 변경해주는 함수(리듀서)가 있다.

// Provider에 데이터를 넘겨주면 중간 컴포넌트에서 props값을 다시 전달해줄 필요 없이 모든 하위 컴포넌트에서 데이터를 사용할 수 있다.
// 컨텍스트 api에서 사용했던 Provider와 동일한 기능을 한다. 
// App 컴포넌트에서 사용할 변수 indexProp에 react 문자열을 할당해 props로 전달한다. 
const listener = () => {
  ReactDOM.render(
		<Provider store={store}>
			<App indexProp="react" />
		</Provider>,
		document.getElementById('root')
  );
}
// sotre를 App 컴포넌트에 전달한다. render 함수를 listener 함수 내부에 위치시킨다.

store.subscribe(listener); // store를 구독하면 store 데이터에 변화가 있을 때 listener 함수 내부의 render 함수를 실행하고 변경된 데이터를 렌더링한다.
listener(); // render 함수를 Listener 함수로 감쌌기 때문에 초기 렌더링을 위해 수동으로 render 함수를 실행시켜준다. 