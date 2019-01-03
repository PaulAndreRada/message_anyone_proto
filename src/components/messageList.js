import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Message from './message';

const MessagesCon = {
  flex: 'none',
  paddingBottom: '103px',
  height: 'auto'
}

class MessageList extends Component {
  constructor(Props){
    super(Props);
    this.messagesCon = null;
  }
  componentWillMount(){
    this.props.onLoad();
  }
  componentDidUpdate() {
    const messages = this.props.messages;
    // leave if no messages have been defined
    if(messages){
      // show the last message if appropriate
      this.showLastMessage();
      // save the length for later
      this.messagesLength = messages.length;
    }
  }
  getMessagesHeight(){
    // gets the height of the container that stores all the messages
    return this.messagesCon.offsetHeight;
  }
  scrollMessagesTo(topPX){
    const messages = this.messagesCon,
          length = messages.children.length;
    // leave if the message is unavailable
    if(!messages){ return false }
    // if the child we are looking for exist then scroll to it
    else if(messages.children[length-1]){
      messages.children[length-1].scrollIntoView({behavior: 'smooth'});
    }
  }
  showLastMessage(){
    // if the container for the messages is not yet up exit function
    if(this.messagesCon === null){return}
    // if a new message was added scroll to the last one
    if( this.messagesLength < this.props.messages.length ){
      this.scrollMessagesTo( this.getMessagesHeight() );
    // if the messages compoer is focused scroll to the last message
    } else if( this.props.isBlurred ) {
      this.scrollMessagesTo( this.getMessagesHeight() );
    }
  }
  renderMessages(){
    // catch undefined error
    if(!this.props.messages){ this.props.messages = [] }
    // render the list and only save the last message
    return (
    <div
      style={MessagesCon}
      ref={(div) => { this.messagesCon = div }}>
      { this.props.messages.map( (message, i) => {
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
