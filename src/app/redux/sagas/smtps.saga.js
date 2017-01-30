import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_SMTPS} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {smtpsReceived} from '../actions/settings.action';
import {loadSmtps as getSmtps} from '../../../api/smtps/smtps.api';

function *loadSmtps(action) {
    yield put(startAjax());
    try {
        const data = yield call(getSmtps, action.url);
        yield put(smtpsReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadSmtpsDefault() {
    yield takeLatest(REQUEST_SMTPS, loadSmtps);

}