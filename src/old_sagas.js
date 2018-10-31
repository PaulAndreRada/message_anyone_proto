import { takeLatest, call, put } from 'redux-saga/effects';
import axios from "axios"

// watcher saga: Watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  // yield stops the Generator function in it's tracks till next() is called on interval
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a promise for response
function fetchData(){
  return axios({
    method: 'get',
    url: 'http://localhost:5000/'
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    // call for the data, then stop
    const response = yield call(fetchData);
    const data = response.data;

    console.log('GOT A RESPONSE: ', response);
    // dispatch a sucess action to the store with the new data
    yield put({ type: "API_CALL_SUCCESS", data });
  } catch (error){
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

export default function* rootSaga(){


}
