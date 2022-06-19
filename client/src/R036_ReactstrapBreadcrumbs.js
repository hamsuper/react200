import React, { Component } from 'react'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'

export default class R036_ReactstrapBreadcrumbs extends Component {
  render() {
    return (
		<div id="top">
			<Breadcrumb tag="nav" listTag="div">
				<BreadcrumbItem tag="a" href="#top">go_top</BreadcrumbItem>
				<BreadcrumbItem tag="a" href="#bottom">go_bottom</BreadcrumbItem>
			</Breadcrumb>
			<div id="bottom" style={{marginTop:'1000px'}}>bottom</div>
		</div>
	);
  }
}
