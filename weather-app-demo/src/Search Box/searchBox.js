import React, { Component } from 'react';
import classes from './searchBox.module.css';
import axios from 'axios';
import { connect } from 'react-redux';

class searchBox extends Component {
    state = {
        searchString: null,
        currentLocation: null,
        currentCityTemp: null,
    };

    inputChangeHandler = (event) => {
        this.setState({ searchString: event.target.value });
    };

    newCityChangeHandler(event) {
        axios
            .get(
                `https://api.opencagedata.com/geocode/v1/json?q=${event.target.value}&key=d53b66b417bc4f72b999d35d1fbf4b98`
            )
            .then((response) => {
                this.setState({
                    currentLocation: response.data.results[0].formatted,
                });
                axios
                    .get(
                        `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.results[0].geometry.lat}&lon=${response.data.results[0].geometry.lng}&units=imperial&appid=da9156d2392f013a7e000b4e71847f75`
                    )
                    .then((response) => {
                        this.props.onFetchWeatherData(response.data);
                        this.setState({
                            currentCityTemp: response.data.current.temp,
                        });
                    })
                    .catch((err) => {
                        alert(err.message);
                    });
            })
            .catch((err) => {
                alert('Please enter a valid city');
            });
    }

    render() {
        return (
            <div className={classes.header}>
                <div className={classes.city}>
                    <h2>Current Location: {this.state.currentLocation}</h2>
                </div>
                <div className={classes.searchBox}>
                    <p>Search</p>
                    <input
                        onChange={(e) => this.inputChangeHandler(e)}
                        onKeyDown={(ev) => {
                            if (ev.key === 'Enter') {
                                this.newCityChangeHandler(ev);
                            }
                        }}
                    ></input>
                </div>
                <p>
                    {this.state.currentCityTemp
                        ? `Current Temperature: ${this.state.currentCityTemp.toFixed(
                              0
                          )}°`
                        : ''}
                </p>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchWeatherData: (resData) =>
            dispatch({ type: 'FETCH_WEATHER', resData }),
    };
};

export default connect(null, mapDispatchToProps)(searchBox);