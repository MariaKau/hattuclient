import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Route render={({ location, history }) => (
          <React.Fragment>
            <SideNav className="sidenav"
              onSelect={(selected) => {
                const to = '/' + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                  <NavText>
                    Kotisivu
                        </NavText>
                </NavItem>
                <NavItem eventKey="bingo">
                  <NavText>
                    Bingo
                        </NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            
          </React.Fragment>
        )}
        />
        {/* <Navbar>
          <Nav>
            <Nav.Link eventKey={1} href="/">Etusivu</Nav.Link>
            <Nav.Link eventKey={2} href="/bingo">Bingo</Nav.Link>
            <Nav.Link eventKey={3} href="/invaders">Invaders</Nav.Link>
            <Nav.Link eventKey={4} href="/generaattori">Generaattori</Nav.Link>
          </Nav>
        </Navbar> */}
      </div>
    )
  }
}
