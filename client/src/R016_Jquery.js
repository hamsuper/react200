import React, { Component } from 'react';
import $ from 'jquery';

export default class R016_Jquery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  input_alert = (e) => {
    var input_val = $('#inputId').val();
    alert(input_val);
  }

  componentDidMount() { }
  
  render() {
    return (
		<div>
        <h2>R016_Jquery</h2>
        <input type="text" id="inputId" name="inputName" />
        <button type="button" id="buttonId" onClick={e => this.input_alert(e)}>Jquery Button</button>
		</div>
	);
  }
}
