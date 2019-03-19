import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

import Home from './components/Home';
import Generator from './components/generator/GeneratorMain';
import Board from './components/bingo/Board';

// Navigation and router

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation></Navigation>
            <Switch>
              <Route exact path="/home" render={() => (<Home />)}></Route>
              <Route path="/generaattori" render={() => (<Generator />)}></Route>
              <Route path="/bingo" render={() => (<Board />)}></Route>
            </Switch>
      </Router>
    );
  }
}

export default App;
