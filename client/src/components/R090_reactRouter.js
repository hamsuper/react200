import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class R090_reactRouter extends Component {
	render() {
		return (
			<>
				<h1>path='/'</h1>
				<h3>R090_reactRouter</h3>
				<Link to={'/reactRouter2'}>reactRouter2</Link>
			</>
		);
	}
}
