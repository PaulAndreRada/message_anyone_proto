import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Message from './message';

const MessagesCon = {
  display: 'flex',
  flexGrow: '2',
  flexDirection: 'column',
  position: 'fixed'
}

class MessageList extends Component {
  constructor(Props){
    super(Props);
    this.messageList = {};
  }
  componentWillMount(){
    this.props.onLoad();
  }
  renderMessages(){
    // catch undefined error
    if(!this.props.messages){ this.props.messages = [] }
    return (
    <div
      style={MessagesCon}
      ref={ (list) => { this.messageList = list }}>
      { this.props.messages.map(message => {
        return(
            <Message
              key={uuid()}
              from={message.from}
              message={message.message}/>
            )}
          )}
    </div>)
  }
  render(){
    return(
      <div>
        {this.props.data? this.renderMessages() : (<div></div>) }
      </div>
    )
  }
}

export default MessageList;
