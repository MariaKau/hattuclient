import React from 'react';

class Square extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      white: this.props.white
    }
  }

  changeColor = () => {
    // this.setState({ white: !this.state.white });
    this.props.checkBingo(this.props.number);
  }

  render() {
    // let square = this.state.white ? "whiteButton" : "orangeButton";

    return (
      <button className={this.props.className} id="square" onClick={this.changeColor}>
        {this.props.quote}
      </button>
    )
  }
}

export default Square;