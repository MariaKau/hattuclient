import React, { Component } from 'react';
//import { Navbar, Nav } from 'react-bootstrap';
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './navigation.css';
import bingo from './Bingoicon.png';
import home from './Homeicon.png';
import quote from './Commenticon.png';
import rocket from './Rocketicon.png';

//https://github.com/trendmicro-frontend/react-sidenav
export default class Navigation extends Component {
  render() {
    return (
      <div>
        
        <Route render={({ location, history }) => (
          <React.Fragment style={{ fontSize: '1.5em', color: '#474647' }}>
            <SideNav className="sidenav"
              onSelect={(selected) => {
                const to = '/' + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <SideNav.Toggle style={{ color: '#474647' }}/>
              <SideNav.Nav defaultSelected="home" >
                <NavItem eventKey="home" className="navitem">
                <NavIcon>
                    <img src={home} height="60%" width="50%" alt="Kotisivu"></img>
                  </NavIcon>
                  <NavText style={{ fontSize: '1.5em', color: '#474647' }}>
                    Kotisivu
                        </NavText>
                </NavItem>
                <NavItem eventKey="bingo" className="navitem">
                  <NavIcon>
                    <img src={bingo} height="60%" width="50%" alt="Bingo"></img>
                  </NavIcon>
                  <NavText style={{ fontSize: '1.5em', color: '#474647' }}>
                    Bingo
                        </NavText>
                </NavItem>
                <NavItem eventKey="generaattori" className="navitem">
                <NavIcon>
                    <img src={quote} height="60%" width="50%" alt="Voimasana"></img>
                  </NavIcon>
                  <NavText style={{ fontSize: '1.5em', color: '#474647' }}>
                    Generaattori
                        </NavText>
                </NavItem>
                <NavItem eventKey="game" className="navitem">
                <NavIcon>
                    <img src={rocket} height="60%" width="50%" alt="Invaders"></img>
                  </NavIcon>
                  <NavText style={{ fontSize: '1.5em', color: '#474647' }}>
                    Invaders
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
