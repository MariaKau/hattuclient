import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Home extends Component {
  render() {
    return (
      <Container fluid="true">
        <Row>
          <Col>
            <div>
              <h1 className="title">Tervetuloa</h1>
              <hr className="dash"></hr>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}