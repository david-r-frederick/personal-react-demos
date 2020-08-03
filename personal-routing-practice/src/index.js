import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { Blue, Green, Purple, Red } from './colors';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Route path="/" exact component={App} />
            <Route path="/red" component={Red} />
            <Route path="/blue" component={Blue} />
            <Route path="/purple" component={Purple} />
            <Route path="/green" component={Green} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.register();