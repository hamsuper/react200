import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class R049_ReactstrapNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <>
        <Navbar color='faded' light>
          <NavbarBrand href='/' className='mr-auto'>내비게이션에서 무조건 표시되는 영역이다.</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className='mr-2' />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href='/'>react</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/'>200</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}
