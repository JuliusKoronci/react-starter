import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../app/components/App';
import Login from '../app/components/Login/Login';
import Logout from '../app/components/Login/Logout';
import Main from '../app/components/Main/Main';
import Dashboard from '../app/components/Main/Dashboard/Dashboard';
import NotFoundPage from '../app/components/Main/NotFoundPage';
import Profile from '../app/components/Main/Users/Profile';
import Settings from '../app/components/Main/Settings/Settings';

export default (
    <Route component={App}>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/" component={Main}>
            <IndexRoute component={Dashboard}/>
            <Route path="profile" component={Profile}/>
            <Route name="settings" path="settings/default" component={Settings}/>
            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Route>
);