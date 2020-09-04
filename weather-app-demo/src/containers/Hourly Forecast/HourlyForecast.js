import React, { Component } from 'react';
import Banner from '../../components/Banner/banner';
import WeatherCard from '../../components/Weather Card/weatherCard';
import classes from './HourlyForecast.module.css';
import { connect } from 'react-redux';

const hours = [];
const currentDate = new Date();
for (let i = 0; i < 7; i++) {
    let currentHour = currentDate.getHours() + i;
    if (currentHour > 24){
        currentHour -= 24 + ':00 am';
    } else if (currentHour > 12){
        currentHour = currentHour - 12 + ':00 pm';
    } else if (currentHour === 12){
        currentHour += ':00 pm';
    } else {
        currentHour += ':00 am';
    }
    hours.push(currentHour);
}


class hourly extends Component {
    render() {
        return (
            <div>
                <Banner bannerTitle="Hourly Forecast" />
                <div className={classes.hourlyRow}>
                    {Array(7)
                        .fill(null)
                        .map((el, index) => {
                            return (
                                <WeatherCard
                                    img={this.props.hourImages[index]}
                                    hourTemp={
                                        this.props.hourTemps[index] !== ''
                                            ? `${this.props.hourTemps[index]}°`
                                            : ''
                                    }
                                    weatherDescription={
                                        this.props.weatherDescriptions[index]
                                    }
                                    key={index}
                                    date={hours[index]}
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
        hourImages: state.hourImages,
        highTemps: state.highTemps,
        lowTemps: state.lowTemps,
        hourTemps: state.hourTemps,
        weatherDescriptions: state.weatherDescs,
    };
};

export default connect(mapStateToProps)(hourly);
