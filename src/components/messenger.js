import React, { Component } from 'react';
import MessageComposer from '../containers/messageComposer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    message: state.messages.message
  }
}

class Messenger extends Component {
  render(){
    return(
      <div>
          <div>{this.props.message}</div>
          <MessageComposer />
      </div>
    )
  }
}

  const MessengerApp = connect(
    mapStateToProps
  )(Messenger);

  export default MessengerApp;
