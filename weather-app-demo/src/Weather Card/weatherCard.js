import React from 'react';
import classes from './weatherCard.module.css';

const weatherCard = (props) => {
    return (
        <div className={classes.weatherCard}>
            <img src={props.img} alt="Weather Png"></img>
            <p className={classes.highTemp}>{props.highTemp}</p>
            <p className={classes.lowTemp}>{props.lowTemp}</p>
            <p>{props.hourTemp}</p>
            <p>{props.weatherDescription}</p>
            <p className={classes.date}>{props.date}</p>
        </div>
    );
};

export default weatherCard;