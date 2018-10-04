import { connect } from 'react-redux'
import { updateComposer, addMessage } from '../actions'
import MessageInput from '../components/messageInput.js'


const mapStateToProps = (state) => {
  return{
    composerText: state.messageComposer.composerText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (text) => {
      dispatch(updateComposer(text))
    },
    onMessageSubmit: (text) => {
      dispatch(addMessage(text))
    }
  }
}

const MessageComposer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageInput);

export default MessageComposer
