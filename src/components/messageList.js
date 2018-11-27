import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Message from './message';

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
              from={message.from}
              sender={message.sender}
              message={message.message}/>
            )}
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
