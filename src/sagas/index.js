import { all, put, takeEvery, call } from 'redux-saga/effects';
import { fetchData } from '../request';

/* THIS PART GOES INTO A MODULE */
// Saga Watcher: Dispatch actions to the redux store, trigers worker sagas
function* watchMessageRequest(){
  // grab the latest dispatch
  yield takeLatest("API_CALL_REQUEST", messageRequest);
}

function* messageRequest(){
  try {
    // call for the messages data
    const response = yield call(fetchData);
    const date = response.data;

    yield put({ type: API_CALL_SUCCESS, data });
  } catch (error){

    yield put({ type: "API_CALL_FAILURE", error });
  }
}

/* THIS IS THE ROOT THAT STAYS */

export default function* rootSaga(){
  yield all([
    watchMessageRequest()
  ]);
}
