import React from 'react';
import './App.css';
import SevenDay from './containers/Seven Day Forecast/sevenDay';
import SideMenu from './components/Side Menu/SideMenu';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBox from './components/Search Box/searchBox';
import Hourly from './containers/Hourly Forecast/HourlyForecast';
import CurrentWeather from './containers/Current Weather/CurrentWeather';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <header>Welcome to my Demo Weather Page</header>
            <div className="utility">
                <SideMenu />
                <SearchBox city={'Houston'} />
            </div>
            <Route path="/sevenDay" component={SevenDay} />
            <Route path="/hourly" component={Hourly} />
            <Route path="/current" component={CurrentWeather} />
        </BrowserRouter>
    );
}

export default App;
