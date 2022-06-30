import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import R090_reactRouter from './R090_reactRouter';
import R089_reactRouter2 from './R089_reactRouter2';

export default class App extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={R090_reactRouter} />
				<Route exact path="/reactRouter2" component={R089_reactRouter2} />
			</div>
		);
	}
}
