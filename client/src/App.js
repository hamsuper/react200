import React, { Component } from 'react';
import { connect } from 'react-redux';
import StrAddButton from './StrAddButton';

class App extends Component {
	render() {
		console.log('props', this.props);

		return (
			<div>
				<h1>Start React 200!</h1>
				<span>{this.props.str}</span>
				<br />
				<StrAddButton AppProp="200" />
			</div>
		);
	}
}

let mapStateToProps = (state, props) => { //파라미터: (스토어의 state, 부모 컴포넌트에서 전달한 props 변수)
	console.log('Props from index.js : ' + props.indexProp);
	return {
		str: state.data.str,
	};
};

App = connect(mapStateToProps, null)(App);

export default App;
