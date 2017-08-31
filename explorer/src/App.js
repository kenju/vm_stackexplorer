import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Frame from './Frame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>VM Explorer</h2>
        </div>
        <Frame />
      </div>
    );
  }
}

export default App;
