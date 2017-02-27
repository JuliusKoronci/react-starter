import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_USERS, UPLOAD_AVATAR} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {usersReceived} from '../actions/settings.action';
import {loadUsers as getUsers} from '../../../api/users/users.api';
import {apiUploadFile, defaultRequest} from '../../../api/api';
import {entityUpdated} from '../../services/general';

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


function *uploadAvatar(action) {
    let config = action.config;

    yield put(startAjax());
    try {
        const data = yield call(apiUploadFile, config.uploadUrl, action.data);
        entityUpdated('File uploaded');

        yield call(defaultRequest, action.config.url, 'PUT', {'image':data.slug}, action.config);
        entityUpdated('User updated');
    } catch (e) {
        yield put(asyncError(e));
    }

    yield put(endAjax());
}

export function *loadUsersDefault() {
    yield takeLatest(REQUEST_USERS, loadUsers);

}

export function *uploadAvatarDefault() {
    yield takeLatest(UPLOAD_AVATAR, uploadAvatar);

}