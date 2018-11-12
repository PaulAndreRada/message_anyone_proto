import { takeLatest, put, call } from 'redux-saga/effects';
import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,
  POLL_FOR_MESSAGES,
 } from '../actions'
import {
  messagePost,
  messagesRequest,
  longPollRequest
} from '../request';

// send a message to the server
function* sendMessage(action){
  const message = action.message;
  try {
    const response = yield call(messagePost, message);
    console.log('RESPONSE: ', response);
    const messages = response.data;
    yield put({ type: SEND_MESSAGE_SUCCESS, messages });
  } catch (error){
    yield put({ type: SEND_MESSAGE_FAILURE, error });
  }
}

// Load Messages from the server
function* loadMessages(){
  /// try calling the messages
  try {
    const response = yield call(messagesRequest);
    const messages = response.data
        console.log('RESPONSE: ', response )
    yield put({ type: LOAD_MESSAGES_SUCCESS, messages });
  } catch(error) {
    yield put({ type: LOAD_MESSAGES_FAILURE, error });
  }
}

function* longPollMessages(){
  // ask for the messages to be updated[once] if there's a new message
  try {
    const response = yield call(longPollRequest);
    const messages = response.data

    yield put({ type: LOAD_MESSAGES_SUCCESS , messages });
    yield put({ type: POLL_FOR_MESSAGES });
  } catch(error) {
    yield put({ type: LOAD_MESSAGES_FAILURE, error });
  }
}

// root messenger sagas exports
const messengerSagas = [
  takeLatest(LOAD_MESSAGES, loadMessages),
  takeLatest(SEND_MESSAGE, sendMessage),
  takeLatest(POLL_FOR_MESSAGES, longPollMessages)
]

export default messengerSagas;
