import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import {sentry_url} from './config/sentry';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './config/store';
import routes from './config/router';


process.env.NODE_ENV === 'production' && Raven.config(sentry_url).install();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
  document.getElementById('root')
);
