import React from 'react';
import './Board.css';
import Square from '../Square/Square';

class Board extends React.Component {
    render() {
        const squareElements = [];
        for (let i = 0; i < 9; i += 3) {
            const squares = [];
            for (let j = i; j < i + 3; j++) {
                squares.push(
                    <Square
                        value={this.props.squares[j]}
                        onClick={() => this.props.onClick(j)}
                        colored={this.props.winInds ? this.props.winInds.includes(j) : false}
                        key={2 * j}
                    />
                );
            }
            squareElements.push(
                <div key={2 * i} className="board-row">
                    {squares}
                </div>
            );
        }

        return (
            <div>
                {squareElements}
            </div>
        );
    }
}

export default Board;