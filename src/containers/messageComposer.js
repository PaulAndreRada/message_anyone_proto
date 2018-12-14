import { connect } from 'react-redux'
import {
  updateComposer,
  sendMessage
} from '../actions'
import MessageInput from '../components/messageInput.js'

const mapStateToProps = (state) => {
  return{
    composerText: state.messageComposer.composerText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (text) => {
      dispatch(updateComposer(text))
    },
    onMessagePost: (e,msg, composer) => {
      e.preventDefault();
      if(msg===""){ return false };
      dispatch(sendMessage(msg))
      dispatch(updateComposer(''));
      composer.focus();
    }
  }
}

const MessageComposer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageInput);

export default MessageComposer
