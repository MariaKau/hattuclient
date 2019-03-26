import React from 'react';

class Square extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      white: true,
      clickedSquares: []
    }
  }

  changeColor() {
    this.setState({ white: !this.state.white });
    this.props.checkBingo(this.props.number);
  }

  render() {
    let square = this.state.white ? "whiteButton" : "orangeButton";

    return (
      <button className={square} id="square" onClick={this.changeColor.bind(this)}>
        {this.props.quote}
      </button>
    )
  }
}

export default Square;