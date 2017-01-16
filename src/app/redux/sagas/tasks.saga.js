import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_DEFAULT_TASKS} from '../constants';
import {endAjax, startAjax} from '../actions/async.action';
import {tasksReceived} from '../actions/tasks.action';
import {defaultFilter} from '../../../api/tasks/tasks.api';

function *defaultTasks() {
    yield put(startAjax());
    const data = yield call(defaultFilter);
    yield put(tasksReceived(data));
    yield put(endAjax());
}


export function *loadTasks() {
    yield takeLatest(REQUEST_DEFAULT_TASKS, defaultTasks);
}