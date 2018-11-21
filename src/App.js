import React, { Component } from 'react';
import Messenger from './containers/messenger';
import './App.css';
import OrgBanner from './components/orgbanner';
import Bang from './components/bangs';


class App extends Component {
  render() {
    return(
      <div>
        <OrgBanner/>
        <Bang/>
        <Messenger />
      </div>
    )
  }
}


export default App;
