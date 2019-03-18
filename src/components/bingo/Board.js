import React from 'react';
import Square from './Square';
import './Bingo.css';

class Board extends React.Component {
    renderSquare() {
      return (
        <Square />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
          </div>
          <div className="board-row">
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
          </div>
          <div className="board-row">
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
          </div>
          <div className="board-row">
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
          </div>
        </div>
      );
    }
  }

export default Board;