import React, { Component } from 'react'
import { Alert, UncontrolledAlert } from 'reactstrap';

export default class R034_ReactstrapAlerts extends Component {
  render() {
    return (
		<div>
			<Alert color={'dark'}>Simple Alert</Alert>
			<UncontrolledAlert color={'warning'}>UncontrolledAlert</UncontrolledAlert>
		</div>
	);
  }
}
