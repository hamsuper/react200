import React, { Component } from 'react'
import axios from 'axios';

export default class R062_AxiosPost extends Component {
  //post 함수의 파라미터로 Json과 같은 형태의 데이터를 넣고 http body에 담아 url을 호출할 수 있다.
  //axios.post('호출 url', json 데이터) 문법으로 post 방식의 Http를 호출한다.
  //json 데이터는 {key1:value1, key2:value2} 형태로 사용하고 http body에 담겨 전송된다.
  //UrL 호출이 완료되면 then 함수가 실행된다. 호출 결과는 response로 반환된다.
  //response.data를 붙이면 변수를 사용할 수 있다.
  componentDidMount() {
    axios.post('http://date.jsontest.com/', {
      a:'react', b:200
    }).then(response => {console.log(response.data)})
  }
  render() {
    return (
      <div>R062_AxiosPost</div>
    )
  }
}
