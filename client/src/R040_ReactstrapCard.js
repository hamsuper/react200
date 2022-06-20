import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


export default class R040_ReactstrapCard extends Component {
  render() {
    return (
		<div>
			<Card>
				<CardImg
					top
					height="200px"
					src="https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/AJUOOCLAA4IAPAX26JMOSKZLRE.png"
					alt="Card Image"
				/>
				<CardBody>
					<CardTitle>카드 제목</CardTitle>
					<CardSubtitle>카드 부제목</CardSubtitle>
					<CardText>카드 내용 Lorem Ipsum is simply dummy Text.</CardText>
					<Button>버튼</Button>
				</CardBody>
			</Card>
		</div>
	);
  }
}
