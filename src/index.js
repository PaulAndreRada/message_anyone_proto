import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux';

import reducer from './reducers'
import rootSaga from './sagas/index';

//create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
//const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE();

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware)) //reduxDevTools)
);

// run the saga
sagaMiddleware.run(rootSaga);

// check up on the state as it updates
//store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
