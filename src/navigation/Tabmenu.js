import React, { Component } from 'react';
import Generator from '../components/generator/GeneratorMain';
import Board from '../components/bingo/Board';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default class Tabmenu extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          key: 'home',
        };
      }
  render() {
    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="bingo" title="Bingo">
          <Board />
        </Tab>
        <Tab eventKey="generaattori" title="Generaattori">
          <Generator />
        </Tab>
      </Tabs>
    )
  }
}
