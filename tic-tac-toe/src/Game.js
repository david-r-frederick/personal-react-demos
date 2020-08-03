import React from 'react';
import './Game.css';

class Square extends React.Component {
    render() {
        return (
            <button
                className="square"
                onClick={this.props.clicked}
                disabled={this.props.disabled}
            >
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                clicked={() => this.props.clicked(i)}
                disabled={this.props.disabled}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPlayerX: true,
            squares: Array(9).fill(null),
        };
    }

    handleClick(ind) {
        if (this.state.squares.every((el) => el !== null)) {
            return;
        }

        const updatedSquaresCopy = this.state.squares.map((el, index) => {
            if (index === ind) {
                if (this.state.squares[ind] !== null) {
                    return el;
                } else {
                    return this.state.currentPlayerX ? 'X' : 'O';
                }
            } else {
                return el;
            }
        });

        if (updatedSquaresCopy.join('') !== this.state.squares.join('')) {
            this.setState((prevState, props) => {
                return {
                    currentPlayerX: !prevState.currentPlayerX,
                };
            });
        }

        this.setState(function (prevState, props) {
            return {
                squares: updatedSquaresCopy,
            };
        });
    }

    render() {
        let helperMessage = (
            <p>The current player is {this.state.currentPlayerX ? 'X' : 'O'}</p>
        );
        const winnerYet = checkWinner(this.state.squares);
        if (winnerYet) {
            helperMessage = null;
        }
        let winStatement = <p>The winner is: {winnerYet}</p>;
        return (
            <div className="game">
                <div className="game-board">
                    {winStatement}
                    <Board
                        clicked={(ix) => {
                            this.handleClick(ix);
                        }}
                        squares={this.state.squares}
                        disabled={!!winnerYet}
                    />
                    <button
                        disabled={!winnerYet}
                        onClick={() =>
                            this.setState({
                                squares: Array(9).fill(null),
                                currentPlayerX: true,
                            })
                        }
                    >
                        Click here to Restart
                    </button>
                </div>
                <div className="game-info">
                    <div>{helperMessage}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

const coordMap = {
    0: "[1, 1]",
    1: "[2, 1]",
    2: "[3, 1]",
    3: "[1, 2]",
    4: "[2, 2]",
    5: "[3, 2]",
    6: "[1, 3]",
    7: "[2, 3]",
    8: "[3, 3]"
};

function checkWinner(arr) {
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'X') {
            xCount++;
        }
        if (arr[i] === 'O') {
            oCount++;
        }
    }
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    if (xCount >= 3) {
        const currentXValueIndexes = arr
            .map((el, i) => {
                return el === 'X' ? i : 'O';
            })
            .filter((el) => {
                return el !== 'O';
            });
        for (let i = 0; i < wins.length; i++) {
            if (
                currentXValueIndexes.includes(wins[i][0]) &&
                currentXValueIndexes.includes(wins[i][1]) &&
                currentXValueIndexes.includes(wins[i][2])
            ) {
                return 'X';
            }
        }
    }
    if (oCount >= 3) {
        const currentOValueIndexes = arr
            .map((el, i) => {
                return el === 'O' ? i : 'X';
            })
            .filter((el) => {
                return el !== 'X';
            });
        for (let i = 0; i < wins.length; i++) {
            if (
                currentOValueIndexes.includes(wins[i][0]) &&
                currentOValueIndexes.includes(wins[i][1]) &&
                currentOValueIndexes.includes(wins[i][2])
            ) {
                return 'O';
            }
        }
    }

    if(arr.every(el => el !== null)){
        return 'tie';
    }
}

export default Game;