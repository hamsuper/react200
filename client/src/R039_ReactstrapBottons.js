import React, { Component } from 'react'
import {Button} from 'reactstrap'

export default class R039_ReactstrapBottons extends Component {
  render() {
    return (
		<div>
			<Button color="primary">primary</Button>
			<Button color="info">info</Button>
			<Button color="success">success</Button>
			<Button color="warning">warning</Button>
			<Button color="danger">danger</Button>
			<Button color="dark">dark</Button>
			<Button color="secondary">secondary</Button>
			<Button color="light">light</Button>
		</div>
	);
  }
}
