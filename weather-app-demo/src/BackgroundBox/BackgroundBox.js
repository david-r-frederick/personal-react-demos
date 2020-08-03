import React from 'react';
import classes from './BackgroundBox.module.css';

const backgroundBox = () => {
    return (
        <div className={classes.boxHolder}>
            <div className={classes.box}></div>
        </div>
    )
}

export default backgroundBox;