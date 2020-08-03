import React, { Component } from 'react';
import WeatherCard from '../Weather Card/weatherCard';
import classes from './sevenDay.module.css';
import Banner from '../Banner/banner';
import { connect } from 'react-redux';

const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});

const week = [today];

for (let i = 1; i < 7; i++) {
    week.push(
        new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString(
            'en-US',
            {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
        )
    );
}

class sevenDay extends Component {
    render() {
        return (
            <div>
                <Banner bannerTitle="7 Day Forecast" />
                <div className={classes.weatherRow}>
                    {Array(7)
                        .fill(null)
                        .map((el, index) => {
                            return (
                                <WeatherCard
                                    img={this.props.dayImages[index]}
                                    highTemp={`High: ${this.props.highTemps[index]}°`}
                                    lowTemp={`Low: ${this.props.lowTemps[index]}°`}
                                    weatherDescription={
                                        this.props.weatherDescriptions[index]
                                    }
                                    key={index}
                                    date={week[index]}
                                />
                            );
                        })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dayImages: state.dayImages,
        highTemps: state.highTemps,
        lowTemps: state.lowTemps,
        weatherDescriptions: state.weatherDescs,
    };
};

export default connect(mapStateToProps)(sevenDay);
