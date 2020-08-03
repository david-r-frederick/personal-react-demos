import React from 'react';
import classes from './SideMenu.module.css';
import { NavLink } from 'react-router-dom';

const sideMenu = (props) => {
    return (
        <ul className={classes.menu}>
            <li>
                <NavLink style={{textDecoration: 'none'}} to="/current">Current Weather</NavLink>
            </li>
            <li>
                <NavLink style={{textDecoration: 'none'}} to="/hourly">Hourly Forecast</NavLink>
            </li>
            <li>
                <NavLink style={{textDecoration: 'none'}} to="/sevenDay">Seven Day Forecast</NavLink>
            </li>
        </ul>
    );
};

export default sideMenu;
