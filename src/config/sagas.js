import {fork} from 'redux-saga/effects';
import {loadAuth} from '../app/redux/sagas/auth.saga';
import {loadTasks} from '../app/redux/sagas/tasks.saga';

export default function* root() {
    yield fork(loadAuth);
    yield fork(loadTasks);
}