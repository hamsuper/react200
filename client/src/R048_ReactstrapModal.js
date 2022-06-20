import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class R048_ReactstrapModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }
  toggle = () => {
    this.setState({modal: !this.state.modal})
  }
  render() {
    return (
		<>
			<Button color="warning" onClick={this.toggle}>
				Modal 버튼
			</Button>
			<Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
				<ModalBody>toggle 함수는 팝업 이외의 영역을 클릭했을 때 실행된다. 팝업 내용이 표시되는 영역이다. </ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={this.toggle}>
						확인
					</Button>
					<Button color="secondary" onClick={this.toggle}>
						닫기
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
  }
}
