import React from 'react';
import Square from './Square';
import './Bingo.css';

class Board extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/', { mode: 'cors' })
      .then(res => res.json())
      .then(data => this.setState({ messages: data.messages.non_personalized }))
      .catch((err) => { throw err })
  }

  renderSquare(number) {
    return (
      <Square message={this.state.messages[number]} />
    );
  }

  render() {

    function RandomList(list) {

      if (!list) {
        return;
      }

      var length = list.length;
      this.indexes = [];

      this.remainingItems = function () {
        return this.indexes.length;
      };

      this['getItem'] = function () {
        var rand = Math.floor(Math.random() * this.indexes.length),
          item = list[this.indexes[rand]];
        this.indexes.splice(rand, 1);
        return item;
      };

      while (length--) {
        this.indexes[this.indexes.length] = length;
      }

    }

    var allMessages = new RandomList(this.state.messages);

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(allMessages.indexes[0])}
          {this.renderSquare(allMessages.indexes[1])}
          {this.renderSquare(allMessages.indexes[2])}
          {this.renderSquare(allMessages.indexes[3])}
        </div>
        <div className="board-row">
          {this.renderSquare(allMessages.indexes[4])}
          {this.renderSquare(allMessages.indexes[5])}
          {this.renderSquare(allMessages.indexes[6])}
          {this.renderSquare(allMessages.indexes[7])}
        </div>
        <div className="board-row">
          {this.renderSquare(allMessages.indexes[8])}
          {this.renderSquare(allMessages.indexes[9])}
          {this.renderSquare(allMessages.indexes[10])}
          {this.renderSquare(allMessages.indexes[11])}
        </div>
        <div className="board-row">
          {this.renderSquare(allMessages.indexes[12])}
          {this.renderSquare(allMessages.indexes[13])}
          {this.renderSquare(allMessages.indexes[14])}
          {this.renderSquare(allMessages.indexes[15])}
        </div>
      </div>
    );
  }
}

export default Board;