import React from 'react';
import './Bingo.css'

class Square extends React.Component {

  checkIfBingo = () => {
    this.props.checkBingo(this.props.number);
  }

  render() {
    return (
      <button className={this.props.white ? 'whiteButton' : this.props.bingoSquare ? 'bingoButton' : 'orangeButton'} id="square" onClick={this.checkIfBingo}>
        {this.props.quote}
      </button>
    )
  }
}

export default Square;