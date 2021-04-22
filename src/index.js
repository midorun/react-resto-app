import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router'
import App from './components/app';
import ErrorBoundry from './components/error-boundry/error-boundry';
import RestoService from './services/resto-service'

import './index.scss';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <App />
            </Router>
        </ErrorBoundry>
    </Provider>

    , document.getElementById('root'));

