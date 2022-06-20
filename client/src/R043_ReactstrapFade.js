import React, { Component } from 'react'
import { Button, Fade } from 'reactstrap'

export default class R043_ReactstrapFade extends Component {
  constructor(props) {
    super(props);
    this.state = { fadeInOut: true };
  }

  toggle = (e) => {
    this.setState({ fadeInOut: !this.state.fadeInOut });
  }
  render() {
    return (
      <div>
        <Button color='success' onClick={this.toggle}>Fade in/out</Button>
        <Fade in={this.state.fadeInOut} tag='h1'>
          Fade 태그는 in 속성이 true 이면 표시, false 이면 미표시된다. fadeInOut 의 초깃값이 true이기 때문에 최초 화면 로딩시 Fade 태그 영역이 표시된다.
        </Fade>
      </div>
    )
  }
}
