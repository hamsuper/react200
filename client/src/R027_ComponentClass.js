import React, { Component } from 'react'

export default class R027_ComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateString: 'react',
      stateArrayObj: ['react', { react: '200' }],
    };
  }

  clickButton = (type) => {
    if (type === 'string') {this.setState({stateString : 'react'})}
    if(type === 'array') {this.setState({stateArrayObj: ['react', { react: '200' }]})}
  }

  render() {
    console.log('렌더링되었습니다.');
    return (
		<div>
			<button type="button" onClick={(e) => this.clickButton('string')}>
				stateString
			</button>
			<button type="button" onClick={(e) => this.clickButton('array')}>
				stateArrayObj
			</button>
			<p>stateString : {this.state.stateString}</p>
			<p>stateArrayObj : {JSON.stringify(this.state.stateArrayObj)}</p>
		</div>
	);
  }
}
