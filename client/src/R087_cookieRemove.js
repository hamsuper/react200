import React, { Component } from 'react'
import cookie from 'react-cookies';

export default class R087_cookieRemove extends Component {
  componentDidMount() {
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 60);

  cookie.save('userid', 'react200',
    {
      path: '/', //쿠키 값을 저장하는 서버 경로 
      expires, //쿠키 유효 시간
      // secure: true, // 웹 브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키가 저장
      // httpOnly: true // document.cookie라는 자바스크립트 코드, 쿠키에 비정상적으로 접속하는 것을 막는 옵션
  }) //파라미터 (쿠키의 키(userid), 쿠키 값(react200), 쿠키 옵션)
    setTimeout(function () {
      cookie.remove('userid', { path: '/' });
    }, 1000);
    setTimeout(function () {
      alert(cookie.load('userid'));
    }, 2000); // 쿠키가 저장되기까지 충분한 시간을 두기 위해 사용 .
  }
  render() {
    return (
      <div>R087_cookieRemove</div>
    )
  }
}
