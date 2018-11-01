import React, { Component } from 'react';
import MessageComposer from '../containers/messageComposer';
import Messages from '../containers/messages'

class MessengerApp extends Component {
  render(){
    console.log(this.props)
    return(
      <div>
        <Messages />
        <MessageComposer />
      </div>
    )
  }
}

export default MessengerApp;
