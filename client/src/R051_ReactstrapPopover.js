import React, { Component } from 'react'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class R051_ReactstrapPopover extends Component {
  render() {
    return (
      <>
        <Button id='popover_id' type='button'>
          Popover button
        </Button>
        <UncontrolledPopover placement='right' target={'popover_id'}>
          <PopoverHeader>React 200</PopoverHeader>
          <PopoverBody>
            메시지 내용을 표시할 수 있다.
          </PopoverBody>
        </UncontrolledPopover>
      </>
    )
  }
}
