import {REQUEST_USERS, USERS_RECEIVED} from '../constants';

export function requestUsers(url) {
    return {
        type: REQUEST_USERS,
        url
    }
}

export function usersReceived(response) {
    return {
        type: USERS_RECEIVED,
        response
    }
}