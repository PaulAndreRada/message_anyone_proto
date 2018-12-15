import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/ttlogo.svg';

const Banner = styled.div`
  display: flex;
  flex-position: row;
  height: 30px;
  width: 100%;
  justify-content: center;
  background: white;

  .logo{
    height: 14px;
    width: 14px;
    margin-top: 1px;
    margin-right: 5px;
  }

  .text{
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 13px;
    color: #929292;
  }
`

class PoweredBanner extends Component {
  render(){
    return (
      <Banner>
        <img src={logo} className="logo" alt="TigerConnect Logo" />
        <div className="text">Powered by TigerConnect</div>
      </Banner>
    )
  }
}

export default PoweredBanner;
