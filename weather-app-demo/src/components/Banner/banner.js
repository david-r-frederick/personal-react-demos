import React from 'react';
import classes from './banner.module.css';

const banner = props => {
    return (
        <h1 className={classes.banner}>{props.bannerTitle}</h1>
    )
}

export default banner;