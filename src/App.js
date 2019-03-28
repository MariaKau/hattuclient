import React, { Component } from 'react';
import './App.css';
import Tabmenu from './navigation/Tabmenu';
import './navigation/Tabmenu.css';

// Navigation and router

class App extends Component {
  render() {
    return (
        <div id="App">
          <Tabmenu activeTab={2} />
        </div>
    );
  }
}

export default App;
