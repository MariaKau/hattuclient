import React, { Component } from 'react';
import './App.css';
import Tabmenu from './navigation/Tabmenu';

// Navigation and router

class App extends Component {
  render() {
    return (
        <div id="App">
          <Tabmenu activeTab={2} />
          <div id="page-wrap">
          </div>
        </div>
    );
  }
}

export default App;
