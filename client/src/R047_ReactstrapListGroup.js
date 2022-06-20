import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

export default class R047_ReactstrapListGroup extends Component {
  render() {
    return (
		<>
			<ListGroup>
				<ListGroupItem color="danger" className="justify-content-between">
					Badge <Badge pill>200</Badge>
				</ListGroupItem>
				<ListGroupItem disabled tag="a" href="#">
					Disable
				</ListGroupItem>
				<ListGroupItem tag="a" href="#">
					Link
				</ListGroupItem>
          <ListGroupItem tag="button" action onClick={e => alert('button')}>
					Button
				</ListGroupItem>
			</ListGroup>
		</>
	);
  }
}
