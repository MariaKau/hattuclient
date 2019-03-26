import React, { Component } from 'react';
import './navigation.css';
import Generator from '../components/generator/GeneratorMain';
import Board from '../components/bingo/Board';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Tabmenu.css';


export default class Tabmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // key: 'bingo',
      activeTab: props.activeTab || 1
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(selectedTab) {
    this.setState({
      activeTab: selectedTab
    });
  }
  
  render() {
    
    return (
      <Tabs className="myMenu" activeKey={this.state.activeTab}
        onSelect={this.handleSelect}>
        <Tab className = "myBingo" eventKey={1} title="Bingo">
          <Board />
        </Tab>
        <Tab className = "myGenerator" eventKey={2} title="Generaattori">
          <Generator />
        </Tab>
      </Tabs>
    );
  }
}


