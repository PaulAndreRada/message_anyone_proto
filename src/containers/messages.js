import { connect } from 'react-redux'
import MessageList from '../components/messageList'

const mapStateToProps = (state) => {
  return {
    fetching: state.network.fetching,
    data: state.network.data,
    error: state.network.error,
    message: state.messages.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Messages = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList);

export default Messages;
