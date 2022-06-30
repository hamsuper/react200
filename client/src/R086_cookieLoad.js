import React, { Component } from 'react'
import cookie from 'react-cookies';

export default class R086_cookieLoad extends Component {
  // load 함수는 웹 브라우저에 남아있는 쿠키에 Key로 접근해 value를 가져오는 함수 
  componentDidMount() {
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 60)
    cookie.save('userid', 'react200', {
      path: '/',
      expires,
    });
    setTimeout(function () {
		alert(cookie.load('userid'));
	}, 1000); // 쿠키가 저장되기까지 충분한 시간을 두기 위해 사용 .
  }
  render() {
    return (
      <div>R086_cookieLoad</div>
    )
  }
}
