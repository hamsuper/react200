import React, { Component } from 'react'
import {Badge, Button} from 'reactstrap'

export default class R035_ReactstrapBadges extends Component {
  render() {
    return (
      <div>
        <h1>product name <Badge color="secondary">hit</Badge></h1>
        <Button color="light" outline>
          버튼 <Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill>테두리 둥글게 적용</Badge>
        <Badge href="http://google.com" color="light">링크 연결</Badge>
      </div>
    )
  }
}
