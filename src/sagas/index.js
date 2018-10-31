import { all, takeLatest, put, call } from 'redux-saga/effects';
import { MESSAGE_REQUEST, MESSAGE_CALL_SUCCESS, MESSAGE_CALL_FAILURE } from '../actions'
import { fetchData } from '../request';

function* messageRequest(){
  try {
    // call for the messages data
    const response = yield call(fetchData);
    const data = response.data;

    yield put({ type: MESSAGE_CALL_SUCCESS, data });
  } catch (error){
    yield put({ type: MESSAGE_CALL_FAILURE, error });
  }
}

// MODULE MESSENGER SAGAS <-- MAKE THIS IT's OWN MODULE
const messengerSagas = [
  takeLatest( MESSAGE_REQUEST, messageRequest)
]

// MODULE: ROOT SAGA
export default function* rootSaga(){
  yield all(messengerSagas);
}
