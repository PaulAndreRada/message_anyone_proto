import React, { Component } from 'react';
import MessageComposer from '../containers/messageComposer';
import { connect } from 'react-redux';

import { messageRequest } from '../actions';

const mapStateToProps = (state) => {
  return {
    fetching: state.network.fetching,
    data: state.network.data,
    error: state.network.error,
    message: state.messages.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestData: () => {
      dispatch(messageRequest())
    }
  }
}

class Messenger extends Component {
  render(){
    const {fetching, data, onRequestData, error } = this.props;

    console.log(this.props)
    return(
      <div>

        {data? (<div>{data.message}</div>) : (<div>no data</div>) }
        {fetching? (<div>Fetching...</div>): (<div></div>)}
        {error && <p>Uh oh, you fucked up</p>}
        {<button onClick={onRequestData}>Request Data</button>}
          <MessageComposer />
      </div>
    )
  }
}

  const MessengerApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Messenger);

  export default MessengerApp;
