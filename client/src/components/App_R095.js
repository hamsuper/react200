import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import R095_reactThrottle from './R095_reactThrottle';

// css
import '../css/new.css';

//header
import Header from './Header/Header';

// footer
import Footer from './Footer/Footer';

export default class App extends Component {
  render() {
    return (
		<div className="App">
			<Header />
			<Route exact path="/Throttle" component={R095_reactThrottle} />
			<Footer />
		</div>
	);
  }
}
