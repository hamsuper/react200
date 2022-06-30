import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import R090_reactRouter from './R090_reactRouter';
import R089_reactRouter2 from './R089_reactRouter2';

// css
import '../css/new.css';

//header
import Header from './Header/Header';

// footer
import Footer from './Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
		  	<Route exact path="/" component={R090_reactRouter} />
        <Route exact path="/reactRouter2" component={R089_reactRouter2} />
        <Footer />
		</div>
	);
  }
}
