import React, { Component } from 'react';
import classes from './Header.module.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header>
                <p className={classes.title}>YouTube Demo</p>
                <input
                    className={classes.searchInput}
                    onChange={(event) => this.props.changed(event.target.value)}
                    onKeyDown={(event) => this.props.pressed(event.key)}
                ></input>
                <button className={classes.searchBtn} onClick={this.props.search}>Search</button>
            </header>
        );
    }
}

export default Header;