import React, { Component } from 'react';
import styled from 'styled-components';

const Pic = styled.div`
  display: flex;
  height: 24px;
  width: 24px;
  background: 'green';
`

// make a message and insert it in the messages list as a single component

class Avatar extends Component {
  render(){
    return(
      <div>
        <Pic>test</Pic>
      </div>
    )
  }
}

export default Avatar;
