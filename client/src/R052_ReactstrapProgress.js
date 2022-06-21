import React, { Component } from 'react'
import { Progress } from 'reactstrap';

export default class R052_ReactstrapProgress extends Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0 };
  }
  componentDidMount() {
    this.progress()
  }
  progress = () => {
    if (this.state.progress !== 100) {
      setTimeout(function () {
        this.setState({ progress: this.state.progress + 1 });
        this.progress();
      }.bind(this), 100);
    }
  }
  render() {
    return (
		<>
			<div>
				<Progress color="info" value={this.state.progress}>
					{this.state.progress}%
				</Progress>
			</div>
			<Progress multi>
				<Progress bar color="warning" value="25">
					25%
				</Progress>
				<Progress animated color="success" value={'35'}>
					WOW!
				</Progress>
				<Progress striped value={'15'}>
					Meh
				</Progress>
				<Progress bar color="danger" value="25">
					look out
				</Progress>
			</Progress>
		</>
	);
  }
}
