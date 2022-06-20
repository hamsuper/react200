import React, { Component } from 'react'
import { Form, Label, Input, Row, Col, FormGroup } from 'reactstrap';

export default class R044_ReactstrapForm extends Component {
  render() {
    return (
		<Form>
			<Label for="exampleGender">gender</Label>
			<Input type="select" bsSize="sm">
				<option>no select</option>
				<option>woman</option>
				<option>man</option>
			</Input>
			<Row form>
				<Col md={6}>
					<FormGroup>
						<Label for="address">address</Label>
						<Input type="text" name="address" id="address" />
					</FormGroup>
				</Col>
				<Col md={4}>
					<FormGroup>
						<Label for="mobile">mobile</Label>
						<Input type="text" name="mobile" id="mobile" />
					</FormGroup>
				</Col>
				<Col md={2}>
					<FormGroup>
						<Label for="age">age</Label>
						<Input type="text" name="age" id="age" />
					</FormGroup>
				</Col>
			</Row>
		</Form>
	);
  }
}
