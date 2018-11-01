import React, { Component } from 'react';

class MessageList extends Component {
  renderMessages(){
    // will render the list of messages that keeps being updated
  }
  render(){
    const {fetching, data, error } = this.props;
    // for now just render the message comming in
    return(
      <div>
        {data? (<div>{data.message}</div>) : (<div>no data</div>) }
        {fetching? (<div>Fetching...</div>) : (<div></div>) }
        {error && <div> Uh oh, you screwd up</div> }
      </div>
    )
  }
}

export default MessageList;
