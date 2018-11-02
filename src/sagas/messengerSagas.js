import { takeLatest, put, call } from 'redux-saga/effects';
import { SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE } from '../actions'
import { messagePost } from '../request';

// send a message to the server
function* sendMessage(data){
  const message = data.message;
  try {
    const response = yield call(messagePost, message);
    const data = response.data;

    yield put({ type: SEND_MESSAGE_SUCCESS, data });
  } catch (error){
    yield put({ type: SEND_MESSAGE_FAILURE, error });
  }
}

// root messenger sagas exports
const messengerSagas = [
  takeLatest(SEND_MESSAGE, sendMessage)
]

export default messengerSagas;
