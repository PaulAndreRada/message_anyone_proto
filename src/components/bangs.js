import React, { Component } from 'react';
import styled from 'styled-components';

const Bang = styled.div`
  display: flex;
  justify-content: center;
  aling-items: center;
  padding: 13px 0;

  div {
    
    background: #E6EBF1;
    color: #4570A9;
    border-radius: 6px;
    font-family: Helvetica Neue
    font-size: 12px;
    font-weight: 600;
  }
`

class Bangs extends Component {
  render(){
    return(
      <Bang>
        <div>TODAY</div>
      </Bang>
    )
  }
}

export default Bangs;
