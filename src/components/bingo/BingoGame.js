import React, { Component } from 'react';
import Board from './Board';

class BingoGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(16).fill(null)
                }
            ],
            stepNumber: 0
        }
    }

    getBingo = (squares) => {
        const lines = [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11],
            [12, 13, 14, 15]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c, d] = lines[i];
            if (squares[a] === squares[b] === squares[c] === squares[d]) {
                return squares[a];
            }
        }
        alert("BINGO!");
        return null;
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.getBingo(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.white ? "whiteButton" : "orangeButton";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step
        });
    }

    render() {
        const history = this.state.history;
        console.log(this.history)
        const current = history[this.state.stepNumber];
        // const winner = getBingo(current.squares);

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={i => this.handleClick(i).bind(this)} />
                </div>
            </div>
        )
    }
}

export default BingoGame;