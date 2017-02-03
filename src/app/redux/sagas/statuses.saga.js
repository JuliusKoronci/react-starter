import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_STATUSES} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {statusesReceived} from '../actions/settings.action';
import {loadStatuses as getStatuses} from '../../../api/statuses/statuses.api';

function *loadStatuses(action) {
    yield put(startAjax());
    try {
        const data = yield call(getStatuses, action.url);
        yield put(statusesReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadStatusesDefault() {
    yield takeLatest(REQUEST_STATUSES, loadStatuses);

}