import React, { Component } from 'react';
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

const messageCon = {
  display: "flex",
  flexDirection: "column",
}

const headerCon = {
  display: "flex",
  width: '100%',
  flexDirection: 'column',
  position: "relative" // change to fixed for scrolling
}

class MessengerApp extends Component {
  render(){
    return(
      <div style={appCon}>
        <div style={messageCon}>
          <div style={headerCon}>
            <OrgBanner />
          </div>
          <Bang />
          <Messages />
        </div>
        <MessageComposer />
      </div>
    )
  }
}

export default MessengerApp;
