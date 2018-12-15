import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageComposer from '../containers/messageComposer';
import Messages from '../containers/messages';
import OrgBanner from '../components/orgbanner';
import Bang from '../components/bangs';

const appCon = {
  height:"100%",
  display:"flex",
  flexDirection: "column",
  alignContent: "stretch",
  justifyContent: "space-between",
}

const topCon = {
  display: "flex",
  flexDirection: "column",
}

const headerCon = {
  display: "flex",
  width: '100%',
  flexDirection: 'column',
}

const messagesCon = {
  paddingTop: '100%'
}

const mapStateToProps = (state) => {
  return{
    fetching: state.socketNetwork.fetching,
    error: state.socketNetwork.error,
    messages: state.socketNetwork.messages
  }
}

class MessengerApp extends Component {
  haveMessages(){
    const messages = this.props.messages;
    // is there an array?
    if( messages === null ){ return false }
    else if( typeof messages === "object"){
      // if there's an array, check if it's empty
      if( messages.length === 0 ){ return false }
      // if it's not empty return true
      else{ return true }
    }
  }
  render(){
    return(
      <div style={appCon}>
        <div style={topCon}>
          <div style={headerCon}>
            <OrgBanner />
          </div>
          <div style={messagesCon}>
            { this.haveMessages() ? <Bang /> : "" }
            <Messages />
          </div>
        </div>
        <MessageComposer />
      </div>
    )
  }
}

const Messenger = connect(
  mapStateToProps,
)(MessengerApp);

export default Messenger;
