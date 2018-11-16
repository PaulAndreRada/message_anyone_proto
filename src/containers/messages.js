import { connect } from 'react-redux'
import MessageList from '../components/messageList'
import { listenToServer } from '../actions'

const mapStateToProps = (state) => {
  return {
    fetching: state.socketNetwork.fetching,
    data: state.socketNetwork.messages,
    error: state.socketNetwork.error,
    messages: state.socketNetwork.messages
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
