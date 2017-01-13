import {AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR, AUTH_LOGOUT} from '../../constants'

const defaultState = {
    'authenticated': false,
    'jwt': '',
    'user': {},
    'error': ''
};

export default function auth(state = defaultState, action) {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return {
                'authenticated': true,
                'jwt': action.data,
                'user': action.user,
                'error': ''
            };
        case AUTH_LOGIN_ERROR:
            return {
                'authenticated': false,
                'jwt': '',
                'user': {},
                'error': action.message
            };
        case AUTH_LOGOUT:
            return {
                'authenticated': false,
                'jwt': '',
                'user': {},
                'error': ''
            };
        default:
            return state;
    }
}