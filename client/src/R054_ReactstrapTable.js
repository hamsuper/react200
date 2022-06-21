import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class R054_ReactstrapTable extends Component {
  render() {
    return (
		<Table borderless size='sm'>
			<thead>
				<tr>
					<th>number</th>
					<th>Book name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<th>react 100</th>
					<th>₩10,000</th>
				</tr>
				<tr>
					<th scope="row">2</th>
					<th>react 200</th>
					<th>₩20,000</th>
				</tr>
			</tbody>
		</Table>
	);
  }
}
