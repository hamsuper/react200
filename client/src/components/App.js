import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import rechartSimpleLineChart from './Floating_population/rechartsSimplelineChart';

// css
import '../css/new.css';

//header
import Header from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

export default class App extends Component {
  render() {
    return (
		<div className="App">
			<Header />
			<Route exact path="/rechartSimpleLineChart" component={rechartSimpleLineChart} />
			<Footer />
		</div>
	);
  }
}
