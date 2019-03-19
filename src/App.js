import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavText } from '@trendmicro/react-sidenav';

import Home from './components/Home';


// Navigation and router

class App extends Component {
  render() {
    return (
      <container>
        <Router>
          <Navigation></Navigation>
            <Switch>
            <main>
              <Route exact path="/home" render={() => (<Home />)}></Route>
              {/* <Route path="/bingo" component={props => <Bingo />} /> */}
            </main>
            </Switch>
          
        </Router>

      </container>
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
