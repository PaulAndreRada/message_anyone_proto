import React, { Component } from 'react';
import Avatar from './avatar';
import styled from 'styled-components';

// css vars
const metaStyles= {
  color : 797979,
  size : 13
}

const MessageLine = styled.div`
  display: flex;
  flex-direction: ${(props) => props.from === 'web'? "row-reverse" : "row" };
  font-family: "Helvetica Neue";
`
const MessageBubble = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: -1;
    max-width: 523px;
    margin-bottom: 12px;
    margin-left: ${(props) => props.from === 'web' ? '54px': '0'};
    margin-right: ${(props) => props.from === 'web' ? '10px': '54px'};
    padding: 10px;
    padding-bottom: 16px;
    background: ${(props) => props.from === 'web' ? "#DFF7FF": "#F5F5F5" };
    border-radius: ${(props) => props.from === 'web' ? "10px 0 10px 10px" : "0 10px 10px 10px" }

  .name {
    display: flex;
    font-weight: 500;
    font-size: 15px;
    color: #4570A9;
    padding-bottom: 6px;
  }
  .message {
    display: flex;
    font-weight: 400;
    color: #35333C;
    padding-bottom: 6px;
    word-wrap: break-word;
  }
  .metaTags {
    display: flex;
    flex-direction: row;
    .time {
      display: flex;
      color: #${metaStyles.color};
      font-size: ${metaStyles.size}px;
    }
    .dotCon{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 6px;
      .dot{
        height: 3px;
        width: 3px;
        background: #818384;
      }
    }
    .ttlive {
      display: flex;
      color: #${metaStyles.color};
      font-size: ${metaStyles.size}px;
    }
  }
`
const Status = styled.div`
  display: flex;
  flex-direction: row-reverse;
  color: #${metaStyles.color};
  font-size: ${metaStyles.size}px;
  .status{
    display: flex;

  }
`

class Message extends Component {
  isSender() {
    if(this.props.from === 'web') {
      return true
    } else { return false }
  }
  renderStatus(){
    return(
      <div>
        <Status>
            <div className="status">
              delivered
            </div>
          </Status>
      </div>
    )
  }
  render(){
    return(
      <div>
        <MessageLine
          from={this.props.from}>
          { this.isSender() ? '' : <Avatar /> }
          <MessageBubble
            from={this.props.from}
            contenteditable>
                {this.isSender() ? '' : (<div className="name">Emily Waren</div>)}
                <div className="message">{this.props.message}</div>
                <div className="metaTags">
                  <div className="time">10:44 AM</div>
                  <div className="dotCon">
                    <div className="dot"></div>
                  </div>
                  <div className="ttlive">10 Days left</div>
                 {this.isSender() ? '' : '' }
                </div>
          </MessageBubble>
        </MessageLine>
      </div>
    )
  }
}

export default Message;
