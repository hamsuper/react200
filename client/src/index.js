import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux'; //redux 패키지에서 스토어 생성 함수 createStore()를 임포트해 사용할 수 있도록 한다.
import reducers from './reducers';

const store = createStore(reducers);
// createStore 함수의 파라미터로 reducers 폴더 경로를 넘긴다.
// reducers 폴더의 index.js에는 데이터 초깃값을 설정하고 데이터를 변경해주는 함수(리듀서)가 있다.

const listener = () => {
  ReactDOM.render(
    <App store={store} />, // sotre를 App 컴포넌트에 전달한다. render 함수를 listener 함수 내부에 위치시킨다. 
    document.getElementById('root')
  )
}
store.subscribe(listener); // store를 구독하면 store 데이터에 변화가 있을 때 listener 함수 내부의 render 함수를 실행하고 변경된 데이터를 렌더링한다.
listener(); // render 함수를 Listener 함수로 감쌌기 때문에 초기 렌더링을 위해 수동으로 render 함수를 실행시켜준다. 