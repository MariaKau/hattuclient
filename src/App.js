import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import './App.css';

import Home from './components/Home';
import Board from './components/bingo/Board';


// Navigation and router

class App extends Component {
  render() {
    return (
        <Router>
          <Navigation></Navigation>
            <Switch>
              <Route exact path="/home" render={() => (<Home />)}></Route>
              <Route exact path="/bingo" render={() => (<Board />)}></Route>
            </Switch>    
        </Router>
      // <Router>
      //   <Navigation></Navigation>
      //       <Switch>
      //         <Route exact path="/" render={() => (<Home />)}></Route>
      //       </Switch>
      // </Router>
    );
  }
}

export default App;
