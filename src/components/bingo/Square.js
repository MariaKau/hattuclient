import React from 'react';

class Square extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      white: true
    }
  }

  changeColor() {
    this.setState({ white: !this.state.white })
  }

  render() {
    let btn_class = this.state.white ? "whiteButton" : "orangeButton";

    return (
      <button className={btn_class} id="square" onClick={this.changeColor.bind(this)}>
        {this.props.quote}
      </button>
    )
  }
}

export default Square;