import {REQUEST_USERS, USERS_RECEIVED, COMPANIES_RECEIVED, REQUEST_COMPANIES } from '../constants';

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

export function requestCompanies(url) {
    return {
        type: REQUEST_COMPANIES,
        url
    }
}

export function companiesReceived(response) {
    return {
        type: COMPANIES_RECEIVED,
        response
    }
}