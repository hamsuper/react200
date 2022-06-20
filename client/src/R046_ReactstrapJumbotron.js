import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap';

export default class R046_ReactstrapJumbotron extends Component {
  render() {
    return (
		<>
			<Jumbotron style={{backgroundColor:"#D38c7c"}}>
				<h1 className="display-4">Hello, world!</h1>
				<p className="h4">
					This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<hr className="my-2" />
				<p>
					It uses utility classes for typography and spacing to space content out within the larger container.
				</p>
				<p className="lead">
					<Button color="danger">Learn More</Button>
				</p>
			</Jumbotron>
		</>
	);
  }
}
