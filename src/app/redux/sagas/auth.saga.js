import {call, put, takeLatest} from 'redux-saga/effects';
import {AUTH_LOGIN_SUBMITTED, AUTH_LOGOUT_SUBMITTED, AUTH_LOGOUT, REDUX_RESET} from '../constants';
import {endAjax, startAjax} from '../actions/async.action';
import {loginError, loginSucces} from '../actions/auth.actions';
import {login as apiLogin} from '../../../api/auth/login.api';
import jwtDecode from 'jwt-decode';
import {removeFromStorage} from '../../services/storage';
import {TOKEN_KEY} from '../../../config/security';

function *login(action) {
    yield put(startAjax());

    try {
        const response = yield call(apiLogin, action.data);
        const token = response.token;
        const decoded = jwtDecode(token);
        yield put(loginSucces(response.token, decoded));
    } catch (e) {
        yield put(loginError(e.message));
    }

    yield put(endAjax());

}

function *logout() {
    yield put(startAjax());

    removeFromStorage(TOKEN_KEY);

    yield put({
        type: AUTH_LOGOUT
    });
    yield put({
        type: REDUX_RESET
    });

    yield put(endAjax());
}


export function *loadAuth() {
    yield takeLatest(AUTH_LOGIN_SUBMITTED, login);
    yield takeLatest(AUTH_LOGOUT_SUBMITTED, logout);
}