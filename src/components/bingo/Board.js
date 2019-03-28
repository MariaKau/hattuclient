import React from 'react';
import Square from './Square';
import './Bingo.css';
import { Alert, Button } from 'react-bootstrap'

class Board extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      white: Array(16).fill(true),
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
      bingoFound: false,
      bingoLines: [],
      show: false
    };
  }

  //Get data from db in randomized order
  componentDidMount() {
    this.getData();
  }

  //Refresh the page, set table and arrays default
  getNewBingoTable = () => {
    this.setState({
      quotes: [],
      white: Array(16).fill(true),
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
      bingoFound: false,
      bingoLines: [],
      show: false
    });

    this.getData();
  }

  //Fetch data from database
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

  //When square is clicked, it will change its color, 
  //quotes id will be added in squares array (representing clicked squares) and
  //function will call getBingo-function

  handleClick = (number) => {
    this.state.white[number] = !this.state.white[number];
    let quoteID = this.state.quotes[number].id;
    this.state.squares.includes(quoteID)
      ? this.setState({
        squares: this.state.squares.filter(function (square) {
          return square !== quoteID
        })
      })
      : this.state.squares.push(quoteID)

    this.setState({
      show: false
    }, () => { this.getBingo() });
  }

  //Function will set state of Alert showing as false and bingoFound as default
  //With for loop function will check if any of the lines is Bingo line
  //If line is Bingo line, it will be pushed to this.state.bingoLines array
  //If line is Bingo line, Alert will be set as show: true and bingoFound: true

  getBingo = () => {
    const lines = this.state.lines;
    for (let i = 0; i < lines.length; i++) {
      if (this.state.bingoLines.includes(i)) continue;
      const [a, b, c, d] = lines[i];
      if (this.state.squares.includes(this.state.quotes[a].id) && this.state.squares.includes(this.state.quotes[b].id) && this.state.squares.includes(this.state.quotes[c].id) && this.state.squares.includes(this.state.quotes[d].id)) {
        return this.setState({
          bingoFound: true,
          show: true
        }, () => { this.state.bingoLines.push(i) });
      }
    }
  }

  //Render one square taking number as parameter
  //
  renderSquare = (number) => {

    let isInBingo = false;
    if (this.state.bingoFound) {
      for (let bline of this.state.bingoLines) {
        if (this.state.lines[bline].includes(number))
          isInBingo = true;
      }
    }

    if (number >= this.state.quotes.length)
      return <Square quote="Bingo latautuu..."></Square>
    return (
      <Square bingoSquare={isInBingo} quote={this.state.quotes[number].quote} number={number} checkBingo={this.handleClick} white={this.state.white[number]} />
    );
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    return (
      <div>
        <Alert show={this.state.show} variant="success" id="alert" >
          <Alert.Heading>BINGO!</Alert.Heading>
          <p>Ohhoh, taidat olla aikamoisen setämiehen seurassa!
          </p>
          <div className="d-flex justify-content-end">
            <Button onClick={handleHide} variant="outline-success" id="bingobutton">
              Sulje
            </Button>
          </div>
        </Alert>
        <div id="refreshbtn">
          <br />
          <h3 className="bingotitle">Setämiesbingo</h3>
          <Button id="bingobutton" variant="outline-success" onClick={this.getNewBingoTable} >
            Uusi peli
          </Button>
          <br />
        </div>
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