import React from 'react';
import Square from './Square';
import './Bingo.css';
import Alert from 'react-bootstrap/Alert'

class Board extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      white: true,
      squares: [],
      lines: [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15]
      ], 
      alert: null
    };
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

  handleClick = (number) => {
    let quoteID = this.state.quotes[number].id;
    console.log(quoteID);
    this.state.squares.includes(quoteID)
      ? this.setState({
        squares: this.state.squares.filter(function (square) {
          return square !== quoteID
        })
      })
      : this.state.squares.push(quoteID)

    console.log("Squares: " + this.state.squares)
    this.getBingo();
  }

  getBingoAlert = () => (
    <Alert dismissible variant="danger" closeLabel='Close alert'>
      <Alert.Heading>BINGO!</Alert.Heading>
      <p>Ohhoh, taidat olla aikamoisen setämiehen seurassa!
          </p>
    </Alert>
  )

  getBingo = () => {
    const lines = this.state.lines;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d] = lines[i];
      if (this.state.squares[a] && this.state.squares[b] && this.state.squares[c] && this.state.squares[d]) {
        this.setState({ alert: this.getBingoAlert });
        alert("BINGO!")
        return this.setState({
          lines: this.state.lines.filter(function (line) {
            return line !== lines[i]
          })
        })
      }
    }
  }

  renderSquare = (number) => {
    if (number >= this.state.quotes.length)
      return <Square quote="Bingo latautuu..."></Square>
    return (
      <Square quote={this.state.quotes[number].quote} number={number} checkBingo={this.handleClick} />
    );
  }

  render() {

    return (
      <div>
        <div>{this.state.alert}</div>
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
      </div>
    );
  }
}

export default Board;