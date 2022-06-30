import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import R094_reactDebounce from './R094_reactDebounce';

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
			<Route exact path="/Debounce" component={R094_reactDebounce} />
			<Footer />
		</div>
	);
  }
}
