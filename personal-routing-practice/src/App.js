import React, { Component } from 'react';
import { Router, Route, withRouter } from 'react-router-dom';
import classes from './App.module.css';
import colorClasses from './Colors.module.css';

class App extends Component {
    blueClickHandler () {
        this.props.history.push('/blue')
    }

    greenClickHandler () {
        this.props.history.push('/green')
    }
    purpleClickHandler () {
        this.props.history.push('/purple')
    }
    redClickHandler () {
        this.props.history.push('/red')
    }

    render() {
        return (
            <div className={classes.page}>
                    <h2>Choose a Color</h2>
                <div className={classes.btnHolder}>
                    <button className={colorClasses.blue} onClick={() => this.blueClickHandler()}>Blue</button>
                    <button className={colorClasses.green} onClick={() => this.greenClickHandler()}>Green</button>
                    <button className={colorClasses.purple} onClick={() => this.purpleClickHandler()}>Purple</button>
                    <button className={colorClasses.red} onClick={() => this.redClickHandler()}>Red</button>
                </div>
            </div>
        );
    } 
}

export default App;
