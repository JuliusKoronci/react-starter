import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_DEFAULT_TASKS} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {tasksReceived} from '../actions/tasks.action';
import {defaultFilter} from '../../../api/tasks/tasks.api';

function *defaultTasks() {
    yield put(startAjax());
    try {
        const data = yield call(defaultFilter);
        yield put(tasksReceived(data));
    }catch (e){
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadTasks() {
    yield takeLatest(REQUEST_DEFAULT_TASKS, defaultTasks);
}