import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_USERS} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {usersReceived} from '../actions/settings.action';
import {loadUsers as getUsers} from '../../../api/users/users.api';

function *loadUsers(action) {
    yield put(startAjax());
    try {
        const data = yield call(getUsers, action.url);
        yield put(usersReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadUsersDefault() {
    yield takeLatest(REQUEST_USERS, loadUsers);

}