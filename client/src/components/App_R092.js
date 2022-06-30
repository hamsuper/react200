import React, { Component } from 'react'
import { Route } from 'react-router-dom';

// css
import '../css/new.css';

//header
import Header from './Header/Header';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Route exact path='/' component={LoginForm}  />
        <Footer />
		</div>
	);
  }
}
