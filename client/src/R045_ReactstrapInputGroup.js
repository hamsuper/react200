import React, { Component } from 'react'
import { InputGroup, InputGroupText, Input, Button, InputGroupAddon } from 'reactstrap';

export default class R045_ReactstrapInputGroup extends Component {
  render() {
    return (
		<>
			<InputGroup>
				<Input placeholder="userId" />
				<InputGroupText>@reactmail.com</InputGroupText>
			</InputGroup>
        <InputGroup>
          <Button>버튼</Button>
				<Input />
			</InputGroup>
		</>
	);
  }
}
