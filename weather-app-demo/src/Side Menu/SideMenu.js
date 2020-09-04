import React from 'react';
import classes from './SideMenu.module.css';
import { NavLink } from 'react-router-dom';

const sideMenu = (props) => {
    return (
        <ul className={classes.menu}>
            <li>
                <NavLink className={classes.menuItem} to="/current">Current Weather</NavLink>
            </li>
            <li>
                <NavLink className={classes.menuItem} to="/hourly">Hourly Forecast</NavLink>
            </li>
            <li>
                <NavLink className={classes.menuItem} to="/sevenDay">Seven Day Forecast</NavLink>
            </li>
        </ul>
    );
};

export default sideMenu;
