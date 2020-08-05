import React, { Component } from 'react';
import Banner from '../Banner/banner';
import WeatherCard from '../Weather Card/weatherCard';
import classes from './HourlyForecast.module.css';
import { connect } from 'react-redux';

const hours = [];
const currentDate = new Date();
for(let i = 0; i < 7; i++){
  hours.push(currentDate.getHours() + i + ':00');
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
                                    hourTemp={this.props.hourTemps[index] !== '' ? `${this.props.hourTemps[index]}°` : ''}
                                    weatherDescription={this.props.weatherDescriptions[index]}
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

const mapStateToProps = state => {
    return {
        hourImages: state.hourImages,
        highTemps: state.highTemps,
        lowTemps: state.lowTemps,
        hourTemps: state.hourTemps,
        weatherDescriptions: state.weatherDescs
    }
}

export default connect(mapStateToProps)(hourly);
