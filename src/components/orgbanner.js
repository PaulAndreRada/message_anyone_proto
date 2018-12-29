import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/bannerlogo.svg';
import { HEADER_HEIGHT } from '../configs';

const Banner = styled.div`
  position: fixed;
  top:0;
  display: flex;
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: white;
  font-family: Helvetica Neue
  font-weight: 400;
  font-size: 16px;
  color: #7979B2;
  border-bottom: 1px solid #E7E7E7;

  .orgImg {
    height: 30px;
    width: 30px;
    margin: 8px 8px 8px 0;
  }

  .orgName {
    display: flex;
  }
`

class OrgBanner extends Component {
    render(){
      return (
        <Banner>
          <img
            src={logo}
            alt="organization's logo"
            className="orgImg" />
          <div
            className="orgName">
            Santa Monica General Hospital
          </div>
        </Banner>
      )
    }
}

export default OrgBanner;
