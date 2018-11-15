import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from 'routerHistory';

import 'bootstrap/dist/css/bootstrap.css';

import Home from 'components/Home';
import store from 'store'
import Header from 'components/Header';

const app = document.getElementById('root');


render(
    <div>
        <Provider store={store}>
            <div>
                <Header />
                <Router history={history}>
                    <Route path='/' component={Home} />
                </Router>
            </div>
        </Provider>
    </div>
    , app);