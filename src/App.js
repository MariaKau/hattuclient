import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import './App.css';
import Container from 'react-bootstrap/Container'
import Home from './components/Home';


// Navigation and router

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Navigation></Navigation>
            <Switch>
            <main>
              <Route exact path="/home" render={() => (<Home />)}></Route>
              {/* <Route path="/bingo" component={props => <Bingo />} /> */}
            </main>
            </Switch>
          
        </Router>

      </Container>
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
