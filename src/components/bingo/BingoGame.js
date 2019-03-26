import React, { Component } from 'react';
import Board from './Board';

class BingoGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: []
                }
            ],
            stepNumber: 0,
            white: true
        }
    }

    getBingo = (squares) => {
        const lines = [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11],
            [12, 13, 14, 15],
            [0, 4, 8, 12],
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c, d] = lines[i];
            console.log("A: " + squares[a], );
            // if (this.state.squares[a].white === false && this.state.squares[b].white === false && this.state.squares[c].white === false && this.state.squares[d].white === false) {
            //     return alert("BINGO!");
            // }
        }
        return squares;
    }

    handleClick(number) {
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        // const winner = getBingo(current.squares);

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={number => this.handleClick(number)} />
                </div>
            </div>
        )
    }
}

export default BingoGame;