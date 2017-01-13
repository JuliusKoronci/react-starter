import {AUTH_LOGIN_SUBMITTED, AUTH_LOGIN_ERROR, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUBMITTED} from '../constants';
import {TOKEN_KEY} from '../../../config/security'

/**
 * @param values {username, password}
 * @returns {{type, data: *}}
 */
export function login(values) {
    return {
        type: AUTH_LOGIN_SUBMITTED,
        data: values
    }
}

export function logout() {
    return {
        type: AUTH_LOGOUT_SUBMITTED
    }
}

//if storage is specified the data will be saved in the storage under the storage value key
export function loginSucces(token, user) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        data: token,
        user: user,
        storage: TOKEN_KEY
    }
}

export function loginError(message) {
    return {
        type: AUTH_LOGIN_ERROR,
        message: message
    }
}