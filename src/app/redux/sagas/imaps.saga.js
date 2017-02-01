import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_IMAPS} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {imapsReceived} from '../actions/settings.action';
import {loadImaps as getImaps} from '../../../api/imaps/imaps.api';

function *loadImaps(action) {
    yield put(startAjax());
    try {
        const data = yield call(getImaps, action.url);
        yield put(imapsReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadImapsDefault() {
    yield takeLatest(REQUEST_IMAPS, loadImaps);

}