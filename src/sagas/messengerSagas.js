import { takeLatest, takeEvery, take, put, call } from 'redux-saga/effects';
import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,
  POLL_FOR_MESSAGES,
  LISTEN_TO_SERVER,
 } from '../actions'
import {
  messagePost,
  longPollRequest,
  connectToServer,
  createSocketChannel,
  emitMessage,
} from '../request';

// @sockets: listens to the socket and puts the new data into the reducer
function* listenToServer() {
  try{
    // connect to the server
    const socket = yield call(connectToServer);
    // then create a socket channel
    const socketChannel = yield call(createSocketChannel, socket);
    // then put the new data into the reducer
    while(true){
      const messages = yield take(socketChannel);
      yield put({type: LOAD_MESSAGES_SUCCESS, messages});
    }
  } catch(error) {
    console.log(error);
  }
}

// @sockets: sends a message to the server
function* sendMessage(action){
  const message = action.message
  try{
    // send the message
    yield call(emitMessage, message);

  } catch(error) {
    console.log('SEND MESSAGE SAGA ERROR: ', error);
  }
}

/*
// send a message to the server
function* sendMessage(action){
  const message = action.message;
  try {
    const response = yield call(messagePost, message);
    const messages = response.data;
    yield put({ type: SEND_MESSAGE_SUCCESS, messages });
  } catch (error){
    yield put({ type: SEND_MESSAGE_FAILURE, error });
  }
}
*/

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
  takeLatest(SEND_MESSAGE, sendMessage),
  takeLatest(POLL_FOR_MESSAGES, longPollMessages),
  takeEvery(LISTEN_TO_SERVER, listenToServer)
]

export default messengerSagas;
