import {fork} from 'redux-saga/effects';
import {loadAuth} from '../app/redux/sagas/auth.saga';

import {loadTasks, loadTasksFromUrl} from '../app/redux/sagas/tasks.saga';
import {loadFilters} from '../app/redux/sagas/filter.saga';
import {loadUsersDefault} from '../app/redux/sagas/users.saga';

export default function* root() {
    yield fork(loadAuth);
    yield fork(loadTasks);
    yield fork(loadTasksFromUrl);
    yield fork(loadFilters);
    yield fork(loadUsersDefault);
}