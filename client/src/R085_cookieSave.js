import React, { Component } from 'react';
import cookie from 'react-cookies';

export default class R085_cookieSave extends Component {
  componentDidMount() {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);

    console.log(expires.getMinutes() + 60)

    cookie.save('userid', 'react200',
      {
        path: '/', //쿠키 값을 저장하는 서버 경로 
        expires, //쿠키 유효 시간
        // secure: true, // 웹 브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키가 저장
        // httpOnly: true // document.cookie라는 자바스크립트 코드, 쿠키에 비정상적으로 접속하는 것을 막는 옵션
    }) //파라미터 (쿠키의 키(userid), 쿠키 값(react200), 쿠키 옵션)
  }

  render() {
    return (
      <div></div>
    )
  }
}
