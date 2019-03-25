import React from 'react';
import Square from './Square';
import './Bingo.css';

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(16).fill(null)
        }
      ],
      stepNumber: 0,
      quotes: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('https://hattu-server.herokuapp.com/api/bingo', {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=LATIN6'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ quotes: data }))
      .catch((err) => { throw err })
  }

  renderSquare = (number) => {
    if (number >= this.state.quotes.length)
      return <Square quote="Bingo latautuu..."></Square>
    return (
      <Square quote={this.state.quotes[number].quote} onClick={() => this.props.onClick(number)}/>
    );
  }

  // getBingo = (squares) => {
  //   const lines = [
  //     [0, 1, 2, 3],
  //     [4, 5, 6, 7],
  //     [8, 9, 10, 11],
  //     [12, 13, 14, 15]
  //   ];
  //   for (let i=0; i < lines.length; i++) {
  //     const [a, b, c, d] = lines[i];
  //     if (squares[a] === squares[b] === squares[c] === squares[d]) {
  //       return squares[a];
  //     }
  //   }
  //   alert("BINGO!");
  //   return null;
  // }

  render() {

    return (
      <div id="bingo">
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