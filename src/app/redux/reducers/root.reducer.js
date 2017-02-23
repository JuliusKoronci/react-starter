import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth/auth.reducer';
import asyncReducer from './async/async.reducer';
import tasksReducer from './tasks/tasks.reducer';
import filterReducer from './system/filter.reducer';
import usersReducer from './settings/users.reducer';
import companiesReducer from './settings/companies.reducer';
import statusesReducer from './settings/statuses.reducer';
import rolesReducer from './settings/roles.reducer';
import companyAttributes from './settings/company_attributes.reducer.js';
import taskAttributes from './settings/task_attributes.reducer';
import imaps from './settings/imaps.reducer';
import smtps from './settings/smtps.reducer';
import projectSharedFilters from './settings/project_shared_filters.reducer';
import sharedFilters from './settings/shared_filters.reducer';
import units from './settings/units.reducer';
import userAttributes from './settings/user_attributes.reducer';
import settingsReducer from './system/settings.reducer';
import projectsReducer from './system/project.reducer';
import profileReducer from './profile/profile.reducer';
import {REDUX_RESET} from '../constants';

const appReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    auth: authReducer,
    async: asyncReducer,
    tasks: tasksReducer,
    filter: filterReducer,
    settings: settingsReducer,
    users: usersReducer,
    companies: companiesReducer,
    statuses: statusesReducer,
    roles: rolesReducer,
    companyAttributes: companyAttributes,
    taskAttributes: taskAttributes,
    imaps: imaps,
    smtps: smtps,
    projectSharedFilters: projectSharedFilters,
    sharedFilters: sharedFilters,
    userAttributes: userAttributes,
    units: units,
    projects: projectsReducer,
    profile: profileReducer
});

const rootReducer = (state, action) => {
    if (action.type === REDUX_RESET) {
        state = undefined
    }

    return appReducer(state, action)
};

export default rootReducer;