import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import './App.css';
import Container from 'react-bootstrap/Container'
import Home from './components/Home';
import Generator from './components/generator/GeneratorMain';
import Board from './components/bingo/Board';



// Navigation and router

class App extends Component {
  render() {
    return (
      <Container className="container">
        <Router>
          <Navigation className="navi"></Navigation>
            <Switch>
              <Route exact path="/home" render={() => (<Home />)}></Route>
              <Route path="/generaattori" render={() => (<Generator />)}></Route>
              <Route path="/bingo" render={() => (<Board />)}></Route>
            </Switch>
        </Router>
        </Container>
    );
  }
}

export default App;
