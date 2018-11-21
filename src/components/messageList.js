import React, { Component } from 'react';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import Avatar from './avatar';

const Message = styled.div`
    background: ${(props) => props.from === 'web' ? "#DFF7FF": "#F5F5F5" };
`


class MessageList extends Component {
  componentWillMount(){
    this.props.onLoad();
  }
  renderMessages(){
    // catch undefined error
    if(!this.props.messages){ this.props.messages = [] }
    return (
    <div>
      { this.props.messages.map(message => {
        return(
          <Message
            key={uuid()}
            from={message.from}>
            {message.message}
          </Message>) }
          )}
    </div>)
  }
  render(){
    return(
      <div>
        {this.props.data? this.renderMessages() : (<div>no data</div>) }
      </div>
    )
  }
}

export default MessageList;
