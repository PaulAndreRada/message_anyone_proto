import { all } from 'redux-saga/effects';
import messengerSagas from './messengerSagas';

// yield to all sagas
export default function* rootSaga(){
  yield all(messengerSagas);
}
