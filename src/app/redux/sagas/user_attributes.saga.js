import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_USERATTRIBUTES} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {userAttributesReceived} from '../actions/settings.action';
import {loadUserAttributes as getUserAttributes} from '../../../api/user_attributes/user_attributes.api';

function *loadUserAttributes(action) {
    yield put(startAjax());
    try {

        const data = yield call(getUserAttributes, action.url);
        yield put(userAttributesReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadUserAttributesDefault() {
    yield takeLatest(REQUEST_USERATTRIBUTES, loadUserAttributes);

}