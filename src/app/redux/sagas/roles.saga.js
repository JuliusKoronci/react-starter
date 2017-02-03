import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_ROLES} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {rolesReceived} from '../actions/settings.action';
import {loadRoles as getRoles} from '../../../api/roles/roles.api';

function *loadRoles(action) {
    yield put(startAjax());
    try {
        const data = yield call(getRoles, action.url);
        yield put(rolesReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadRolesDefault() {
    yield takeLatest(REQUEST_ROLES, loadRoles);

}