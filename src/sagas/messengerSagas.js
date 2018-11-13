import { takeLatest, takeEvery, take, put, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import { URL } from '../configs';
import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,
  POLL_FOR_MESSAGES,
  LISTEN_TO_SERVER,
 } from '../actions'
import {
  messagePost,
  messagesRequest,
  longPollRequest
} from '../request';
let socket;

// @socket
// WRAPP SOCKET: promise wrapping function for socket.on
// Because saga needs promises to know if the connection was succesfull or not
const connect = () => {
  // init the socket with our server's url
  socket = io(URL);
  // wrap the connection in a promise (to allow error dispatching)
  return new Promise( (resolve) => {
    // on connection resolve the promise
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

// OPEN SOCKET: Open the socket channel
const createSocketChannel = socket => eventChannel( (emit) => {
  const handler = (data) => {
    emit(data);
  }
  // listen to task
  socket.on('newMessage', handler );
  return () => {
      // stop listning to those task
      socket.off('newMessage', handler );
  }
});

// SAGA SOCKET: listens to the socket and puts the new data into the reducer
function* listenToServer() {

  try{
    // connect to the server
    const socket = yield call(connect);

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
  takeLatest(POLL_FOR_MESSAGES, longPollMessages),
  takeEvery(LISTEN_TO_SERVER, listenToServer)
]

export default messengerSagas;
