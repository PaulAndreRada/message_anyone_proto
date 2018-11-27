import React, { Component } from 'react';
import styled from 'styled-components';

const Pic = styled.div`
  display: flex;
  height: 34px;
  width: 34px;
  background-image: url("https://http.cat/100");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 100%;
`

class Avatar extends Component {
  render(){
    return(
      <div>
        <Pic />
      </div>
    )
  }
}

export default Avatar;
