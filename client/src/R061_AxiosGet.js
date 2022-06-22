import React, { Component } from 'react'
import axios from 'axios';

export default class R061_AxiosGet extends Component {
	//axios도 fetch와 마찬가지로 비동기 통신을 지원한다. fetch와 달리 별도로 설치한 후 임포트해 사용해야 한다.
  //axios.get('호출 url')문법으로 get 방식의 http 호출
  //호출이 완료되면 then 함수가 실행된다.
  //호출 결과로 response가 반환된다.
  //response.data를 붙이면 변수를 사용할 수 있다. 
  componentDidMount() {
    axios.get('http://date.jsontest.com/').then(response => { console.log(response.data) })
  }
	render() {
		return <div>R061_AxiosGet</div>;
	}
}
