import {fork} from 'redux-saga/effects';
import {loadAuth} from '../app/redux/sagas/auth.saga';
import {loadTasks} from '../app/redux/sagas/tasks.saga';
import {loadFilters} from '../app/redux/sagas/filter.saga';

export default function* root() {
    yield fork(loadAuth);
    yield fork(loadTasks);
    yield fork(loadFilters);
}