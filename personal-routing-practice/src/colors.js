import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Colors.module.css';

const link = <NavLink to="/"><h5>Return to main</h5></NavLink>;

export const Blue = props => (
    <div className={[classes.blue, classes.color].join(' ')}>
        <h1>Blue</h1>
        {link}
    </div>
);

export const Green = (props) => (
    <div className={[classes.green, classes.color].join(' ')}>
        <h1>Green</h1>
        {link}
    </div>
);

export const Purple = (props) => (
    <div className={[classes.purple, classes.color].join(' ')}>
        <h1>Purple</h1>
        {link}
    </div>
);

export const Red = (props) => (
    <div className={[classes.red, classes.color].join(' ')}>
        <h1>Red</h1>
        {link}
    </div>
);
