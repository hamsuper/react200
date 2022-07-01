import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import floatingPopulationAreaChart from './Floating_population/floatingPopulationAreaChart';

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
			<Route exact path="/floatingPopulationAreaChart" component={floatingPopulationAreaChart} />
			<Footer />
		</div>
	);
  }
}
