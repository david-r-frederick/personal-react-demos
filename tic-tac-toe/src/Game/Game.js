import React from 'react';
import './Game.css';
import Board from './Board/Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            coords: [],
            stepNumber: 0,
            xIsNext: true,
            toggled: false
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winInfo = calculateWinner(squares);
        if (winInfo[0] || squares[i]) {
            return;
        }
        const coords = [...this.state.coords];
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
        coords.push(coordMap[i]);
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            coords: coords,
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        const newCoords = [...this.state.coords];
        const newHistory = [...this.state.history];
        let additional = step === 0 ? 0 : 1;
        newCoords.splice(step);
        newHistory.splice(step + additional);
        if (newHistory.length === 0) {
            newHistory.push({
                squares: Array(9).fill(null)
            });
        }
        this.setState({
            history: newHistory,
            xIsNext: step % 2 === 0,
            coords: newCoords,
            stepNumber: step
        });
    }

    toggleMoveOrder = () => {
        this.setState(prevState => ({ toggled: !prevState.toggled }));
    }

    render() {
        console.clear();
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winInfo = calculateWinner(current.squares);
        const winner = winInfo[0];
        const winIndexes = winInfo[1];
        let moves = history.map((step, move) => {
            const coordsString = this.state.coords[move - 1]
                ? " " + this.state.coords[move - 1]
                : "";
            const desc = move
                ? "Go to move #" + move + coordsString
                : "Go to game start";
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        if (this.state.toggled) {
            const goToGameStartButton = moves[0];
            const actualMoves = moves.slice(1);
            moves = [goToGameStartButton, actualMoves.reverse()];
        }

        let status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        if (winner) {
            status = "Winner: " + winner;
        } else if (!winner && current.squares.every(el => el)){
            status = "Draw";
        }

        let toggleText = "Toggle Move Order";

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        winInds={winIndexes}
                    />
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                    <button className="ToggleBtn" onClick={this.toggleMoveOrder}>{toggleText}</button>
                    <ol style={{
                            listStyleType: "none",
                        }}>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;

// ========================================

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return [squares[a], lines[i]];
        }
    }
    return [null, null];
}
