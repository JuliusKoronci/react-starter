import {fork} from 'redux-saga/effects';
import {loadAuth} from '../app/redux/sagas/auth.saga';

import {loadTasks, loadTasksFromUrl} from '../app/redux/sagas/tasks.saga';
import {loadFilters} from '../app/redux/sagas/filter.saga';
import {loadUsersDefault} from '../app/redux/sagas/users.saga';
import {loadCompaniesDefault} from '../app/redux/sagas/companies.saga';
import {loadStatusesDefault} from '../app/redux/sagas/statuses.saga';

export default function* root() {
    yield fork(loadAuth);
    yield fork(loadTasks);
    yield fork(loadTasksFromUrl);
    yield fork(loadFilters);
    yield fork(loadUsersDefault);
    yield fork(loadCompaniesDefault);
    yield fork(loadStatusesDefault);
}