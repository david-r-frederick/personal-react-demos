import React, { Component, Fragment } from 'react';
import Banner from '../Banner/banner';
import { connect } from 'react-redux';
import classes from './CurrentWeather.module.css';
import BackgroundBox from '../BackgroundBox/BackgroundBox'

class currentWeather extends Component {
    render() {
        let currentWeatherBlock = null;
        if (this.props.currentData !== null) {
            currentWeatherBlock = (
                <div>
                    <BackgroundBox />
                    <div className={classes.weatherBlock}>
                        <img src={this.props.currentImg} alt={'Current Weather Icon'} />
                        <p>Current Temperature: {Math.round(this.props.currentData.temp.toFixed(0))}°
                        </p>
                        <p>Feels Like: {Math.round(this.props.currentData.feels_like)}°</p>
                        <p>Description: {this.props.currentData.weather[0].description}</p>
                        <p>
                            Wind: {Math.round(this.props.currentData.wind_speed.toFixed(0))} mph
                        </p>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <Banner bannerTitle="Current Weather" />
                {currentWeatherBlock}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentImg: state.currentImage,
        currentData: state.currentData,
    };
};

export default connect(mapStateToProps)(currentWeather);
