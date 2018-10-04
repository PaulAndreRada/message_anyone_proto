import React, { Component } from 'react';
import Messenger from './components/messenger';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import app from './reducers'
import './App.css';

const store = createStore(app);
//store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Messenger />
      </Provider>
    )
  }
}




export default App;
