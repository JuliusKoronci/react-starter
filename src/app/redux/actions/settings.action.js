import {REQUEST_USERS, USERS_RECEIVED, COMPANIES_RECEIVED, REQUEST_COMPANIES, STATUSES_RECEIVED, REQUEST_STATUSES, ROLES_RECEIVED, REQUEST_ROLES } from '../constants';

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

export function requestStatuses(url) {
    return {
        type: REQUEST_STATUSES,
        url
    }
}

export function statusesReceived(response) {
    return {
        type: STATUSES_RECEIVED,
        response
    }
}


export function requestRoles(url) {
    return {
        type: REQUEST_ROLES,
        url
    }
}

export function rolesReceived(response) {
    return {
        type: ROLES_RECEIVED,
        response
    }
}