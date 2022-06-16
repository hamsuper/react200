import React, { PureComponent } from 'react'

export default class R028_PureComponentClass extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      string: 'react',
      obj: ['react', {react: '200'}]
    }
  }

  clickButton = (type) => {
    if (type === 'string') {
      this.setState({string:'react'})
    } else {
      this.setState({ obj: ['react', { react: '200' }] });
    }
  }
  render() {
    console.log('렌더링됨')
    return (
		<div>
			<button type="button" onClick={(e) => this.clickButton('string')}>
				string
			</button>
			<button type="button" onClick={(e) => this.clickButton('obj')}>
				obj
			</button>
			<p>{this.state.string}</p>
			<p>{JSON.stringify(this.state.obj)}</p>
		</div>
	);
  }
}
