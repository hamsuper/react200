import React, { Component } from 'react'
import axios from 'axios';

export default class R111_ApiPostJson extends Component {
	componentDidMount() {
		axios.post('/users', {}).then((response) => {
			console.log('response.data.message : ' + response.data.message);
		});
	}

	render() {
		return <div>R111_ApiPostJson</div>;
	}
}
