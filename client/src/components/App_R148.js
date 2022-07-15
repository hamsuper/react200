import React, { Component } from 'react'
import { Route } from 'react-router-dom';

// css
import '../css/new.css';

//header
import Header from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

import SoftwareList from './SoftwareToolsManage/SoftwareList';
import SoftwareView from './SoftwareToolsManage/SoftwareView';

import Register from './Register/Register';

export default class App extends Component {
  render() {
    return (
		<div className="App">
			<Header />
			<Route exact path="/" component={LoginForm} />
			<Route exact path="/SoftwareList" component={SoftwareList} />
			<Route exact path="/SoftwareView/:swtcode" component={SoftwareView} />
			<Route path="/register" component={Register} />
			<Footer />
		</div>
	);
  }
}
