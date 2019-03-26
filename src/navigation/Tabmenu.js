import React, { Component } from 'react';
import './navigation.css';
import Generator from '../components/generator/GeneratorMain';
import Board from '../components/bingo/Board';
import './navigation.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Animated} from "react-animated-css";
export default class Tabmenu extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          key: 'generaattori',
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
        <Animated animationIn="fadeIn" className="animated">
          <Board /></Animated>
        </Tab>
        <Tab eventKey="generaattori" title="Generaattori">
        <Animated animationIn="fadeIn" className="animated">
          <Generator /></Animated>
        </Tab>
        
      </Tabs>
      
      
    )
  }
}
