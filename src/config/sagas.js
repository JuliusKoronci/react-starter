import {fork} from 'redux-saga/effects';
import {loadAuth} from '../app/redux/sagas/auth.saga';

import {loadTasks, loadTasksFromUrl} from '../app/redux/sagas/tasks.saga';
import {loadFilters} from '../app/redux/sagas/filter.saga';
import {loadUsersDefault} from '../app/redux/sagas/users.saga';
import {loadCompaniesDefault} from '../app/redux/sagas/companies.saga';
import {loadStatusesDefault} from '../app/redux/sagas/statuses.saga';
import {loadRolesDefault} from '../app/redux/sagas/roles.saga';
import {loadCompanyAttributesDefault} from '../app/redux/sagas/company_attributes.saga.js';
import {loadTaskAttributesDefault} from '../app/redux/sagas/task_attributes.saga.js';
import {loadImapsDefault} from '../app/redux/sagas/imaps.saga.js';
import {loadSmtpsDefault} from '../app/redux/sagas/smtps.saga.js';
import {loadProjectSharedFiltersDefault} from '../app/redux/sagas/project_shared_filters.saga';
import {loadSharedFiltersDefault} from '../app/redux/sagas/shared_filters.saga';


export default function* root() {
    yield fork(loadAuth);
    yield fork(loadTasks);
    yield fork(loadTasksFromUrl);
    yield fork(loadFilters);
    yield fork(loadUsersDefault);
    yield fork(loadCompaniesDefault);
    yield fork(loadStatusesDefault);
    yield fork(loadRolesDefault);
    yield fork(loadCompanyAttributesDefault);
    yield fork(loadTaskAttributesDefault);
    yield fork(loadImapsDefault);
    yield fork(loadSmtpsDefault);
    yield fork(loadProjectSharedFiltersDefault);
    yield fork(loadSharedFiltersDefault);
}