import React from 'react';
import './Square.css';

function Square(props) {
    const color = props.colored ? 'rgb(180, 200, 250)' : '#fff';
    return (
        <button style={{backgroundColor: color}}  className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;