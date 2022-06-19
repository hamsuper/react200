import React, { Component } from 'react'
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'

export default class R037_ReactstrapDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen : false
    }
  }

  toggle = (e) => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  render() {
    return (
		<div>
			<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle caret>버튼 dropdown</DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>헤더 - 하위 메뉴 리스트에 대한 대표 정보를 기입할 수 있다.</DropdownItem>
					<DropdownItem disabled>비활성화 버튼</DropdownItem>
					<a href="http://google.com">
						<DropdownItem>google link 이동</DropdownItem>
					</a>
					<DropdownItem onClick={e => alert('alert')}>onclick</DropdownItem>
				</DropdownMenu>
			</ButtonDropdown>
		</div>
	);
  }
}
