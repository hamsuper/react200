import React, { Component } from 'react'

export default class R025_SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: 'react',
    }
  }

  StateChange = (flag) => {
    if (flag === 'direct') {this.state.StateString = '리액트'}
    if (flag === 'setState') {this.setState({StateString: '리액트'})}
  }

  render() {
    return (
		<div>
			<button type="button" onClick={(e) => this.StateChange('direct', e)}>
				state 직접 변경
			</button>
			<button type="button" onClick={(e) => this.StateChange('setState', e)}>
				setState로 변경
			</button>
			<p>[state 변경하기] StateString: {this.state.StateString}</p>
		</div>
	);
  }
}
