import React, { Component } from 'react'

export default class R060_FetchPost extends Component {
  //GET - 데이터를 조회해 가져와 사용하는 용도로 사용
  //POST - 서버의 상태나 데이터를 변경하는 등의 수행 작업에 사용, http body에 데이터를 넣어 전달하는데, url 뒤에 파라미터를 표시하지 않고 사용할 수 있다는 장점이 있다.
  componentDidMount = async () => {
    const response = await fetch('http://date.jsontest.com/', {
		method: 'POST', //post 방식으로 통신을 하겠다는 의미다.
		headers: { //http 통신을 할 때 header 부분에서 어떤 형태의 데이터를 사용할지 지정한다. 
			'Content-Type': 'application/json', //Content-Type이라는 변수를 사용, json 형태의 데이터를 사용하기 위해 application/json을 할당한다.
		},
		body: { a: 'react', b: 200 }, //http body에 json 형태의 데이터를 담아 전송한다.
	});
    const body = await response.json();
    console.log(body);
    alert(body.time);
    //fetch - 자바스크립트 내장 함수 
    // - 두번째 파라미터에 Post 호출에 대한 정보가 추가된다. 
  }
  render() {
    return (
      <div>R060_FetchPost</div>
    )
  }
}
