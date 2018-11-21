import React, { Component } from 'react';
import styled from 'styled-components'

const Banner = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  background: white;
  font-family: Helvetica Neue
  font-weight: 400;
  font-size: 16px;
  color: #7979B2;
  border-bottom: 1px solid #E7E7E7;
`
/* todo:
  text is not exactly as design
  how to best inport the svg?
*/

class OrgBanner extends Component {
    render(){
      return (
        <Banner>
          <div>Santa Monica General Hospital</div>
        </Banner>
      )
    }
}

export default OrgBanner;
