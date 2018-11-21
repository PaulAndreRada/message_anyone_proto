import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux';
import reducer from './reducers'
import rootSaga from './sagas/index';

// Redux Middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// run the sagas
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
