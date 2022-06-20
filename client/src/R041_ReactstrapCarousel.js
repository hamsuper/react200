import React, { Component } from 'react'
import { UncontrolledCarousel } from 'reactstrap';

const items = [
	{
		src: 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/AJUOOCLAA4IAPAX26JMOSKZLRE.png',
		altText: '슬라이드1 이미지 대체 문구',
		caption: '슬라이드1 설명',
		header: '슬라이드1 제목',
	},
	{
		src: 'http://image.chosun.com/sitedata/image/201611/25/2016112500701_0.png',
		altText: '슬라이드2 이미지 대체 문구',
		caption: '슬라이드2 설명',
		header: '슬라이드2 제목',
	},
	{
		src: 'https://snvision.seongnam.go.kr/imgdata/snvision/201804/2018042353169842.jpg',
		altText: '슬라이드3 이미지 대체 문구',
		caption: '슬라이드3 설명',
		header: '슬라이드3 제목',
	},
];

export default class R041_ReactstrapCarousel extends Component {
  render() {
    return (
      <UncontrolledCarousel items={items}/>
    )
  }
}
