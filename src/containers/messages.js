import { connect } from 'react-redux'
import MessageList from '../components/messageList'
import { listenToServer } from '../actions'

const mapStateToProps = (state) => {
  return {
    fetching: state.messengerNetwork.fetching,
    data: state.messengerNetwork.messages,
    error: state.messengerNetwork.error,
    messages: state.messengerNetwork.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
      dispatch(listenToServer());
    }
  }
}

const Messages = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList);

export default Messages;
