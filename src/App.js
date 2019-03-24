import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Navigation from './navigation/Navigation';
import './App.css';
import Container from 'react-bootstrap/Container'
import Home from './components/Home';
import Generator from './components/generator/GeneratorMain';
import Board from './components/bingo/Board';

import SideBar from './navigation/Sidemenu';
import {Animated} from "react-animated-css";

// Navigation and router

class App extends Component {
  render() {
    return (
      <Animated animationIn="fadeIn" className="animated">
      <div id="App">
        <Router>
          <SideBar></SideBar>
          <div id="page-wrap">
          {/* <Navigation className="navi"></Navigation> */}
            <Switch>
              <Route exact path="/home" render={() => (<Home />)}></Route>
              <Route path="/generaattori" render={() => (<Generator />)}></Route>
              <Route path="/bingo" render={() => (<Board />)}></Route>
            </Switch>
            </div>
        </Router>
        </div>
        </Animated>
    );
  }
}

export default App;
