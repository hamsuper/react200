import React, { Component } from 'react'
import { Spinner } from 'reactstrap';

export default class R053_ReactstrapSpinner extends Component {
  render() {
    return (
		<>
			<Spinner color="secondary" />
			<Spinner color="success" />
			<Spinner type="grow" color="dark" />
			<Spinner type="grow" color="info" />
			<Spinner size="sm" color="primary" />
			<Spinner style={{ width: '10rem', height: '0.5rem' }} color="dark" />
			<Spinner style={{ width: '10rem', height: '10rem' }} color="secondary" />
			<Spinner style={{ width: '3rem', height: '10rem' }} type="grow" color="primary" />
		</>
	);
  }
}
