import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_DEFAULT_TASKS, REQUEST_TASKS_FROM_URL, REQUEST_TASK_BY_ID, TASK_UPDATED} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {tasksReceived, taskReceived} from '../actions/tasks.action';
import {defaultFilter, getTasksFromUrl, getTaskById, updateTask as updateApi} from '../../../api/tasks/tasks.api';

function *defaultTasks() {
    yield put(startAjax());
    try {
        const data = yield call(defaultFilter);
        yield put(tasksReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadTasks() {
    yield takeLatest(REQUEST_DEFAULT_TASKS, defaultTasks);
}


function *loadTasksUrl(action) {
    yield put(startAjax());
    try {
        const data = yield call(getTasksFromUrl, action.url);
        yield put(tasksReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}

function *loadTaskById(action) {
    yield put(startAjax());
    try {
        const data = yield call(getTaskById, action.id);
        yield put(taskReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}

function *updateTask(action) {
    yield put(startAjax());
    try {
         yield call(updateApi, action.taskId, action.data);
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadTasksFromUrl() {
    yield takeLatest(REQUEST_TASKS_FROM_URL, loadTasksUrl);
    yield takeLatest(REQUEST_TASK_BY_ID, loadTaskById);
    yield takeLatest(TASK_UPDATED, updateTask);

}