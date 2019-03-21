import React from 'react';
import Square from './Square';
import './Bingo.css';

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('https://hattu-server.herokuapp.com/api/bingo', { mode: 'cors' })
      .then(res => res.json())
      .then(data => this.setState({ quotes: data }))
      .catch((err) => { throw err })
  }

  renderSquare = (number) => {
    if (number >= this.state.quotes.length)
      return <Square quote="Bingo latautuu..."></Square>
    return (
      <Square quote={this.state.quotes[number].quote} />
    );
  }
  

  render() {

    return (
      <div>
        <div>
          <h1>Setämiesbingo</h1>
          <br/>
        </div>
        <div id="board-row-1" className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div id="board-row-2" className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div id="board-row-3" className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div id="board-row-4" className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
    );
  }
}

export default Board;