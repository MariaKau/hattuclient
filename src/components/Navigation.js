import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Nav>
            <Nav.Link eventKey={1} href="/home">Etusivu</Nav.Link>
            <Nav.Link eventKey={2} href="/bingo">Bingo</Nav.Link>
            <Nav.Link eventKey={3} href="/invaders">Invaders</Nav.Link>
            <Nav.Link eventKey={4} href="/generaattori">Generaattori</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
