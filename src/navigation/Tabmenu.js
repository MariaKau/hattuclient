import React, { Component } from 'react';
import './navigation.css';
import Generator from '../components/generator/GeneratorMain';
import Board from '../components/bingo/Board';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default class Tabmenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // key: 'bingo',
          activeTab: props.activeTab || 1
        };
        this.handleSelect = this.handleSelect.bind(this);
      }
  render() {
    return (
        <Tabs className="myMenu" activeKey={this.state.activeTab}
        onSelect={this.handleSelect}>
        <Tab eventKey={1} title="Bingo">
          <Board />
        </Tab>
        <Tab eventKey={2} title="Generaattori">
          <Generator />
        </Tab>
      </Tabs>
    );
  }
  handleSelect(selectedTab) {
    this.setState({
      activeTab: selectedTab
    });
  }
}

  