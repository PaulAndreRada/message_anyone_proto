import React, { Component } from 'react';
import Avatar from './avatar';
import styled from 'styled-components';

/* TODO:
-pass the sender name from the server
-add positions for all components in the message
-
*/

// css vars
const metaStyles= {
  color : 797979,
  size : 13
}


const MessageBubble = styled.div`
  background: ${(props) => props.from === 'web' ? "#DFF7FF": "#F5F5F5" };
  font-family: "Helvetica Neue";

  .name {
    font-weight: 500;
    color: #4570A9;
  }
  .message {
    font-weight: 400;
    color: #35333C;
  }
  .time {
    color: #${metaStyles.color};
    font-size: ${metaStyles.size}px;
  }
  .ttlive {
    color: #${metaStyles.color};
    font-size: ${metaStyles.size}px;
  }
`

class Message extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <Avatar />
      <MessageBubble
        from={this.props.from}>
        <div className="name">Emily Waren {this.props.sender}</div>
        <div className="message">{this.props.message}</div>
        <div className="time">10:44 AM</div>
        <div className="ttlive">10 Days left</div>
      </MessageBubble>
      </div>
    )
  }
}

export default Message;
