import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_TASKATTRIBUTES} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {taskAttributesReceived} from '../actions/settings.action';
import {loadTaskAttributes as getTaskAttributes} from '../../../api/task_attributes/task_attributes.api.js';

function *loadTaskAttributes(action) {
    yield put(startAjax());
    try {
        const data = yield call(getTaskAttributes, action.url);
        yield put(taskAttributesReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadTaskAttributesDefault() {
    yield takeLatest(REQUEST_TASKATTRIBUTES, loadTaskAttributes);

}