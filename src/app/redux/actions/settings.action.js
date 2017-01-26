import * as constants from '../constants';

export function requestUsers(url) {
    return {
        type: constants.REQUEST_USERS,
        url
    }
}

export function usersReceived(response) {
    return {
        type: constants.USERS_RECEIVED,
        response
    }
}

export function requestCompanies(url) {
    return {
        type: constants.REQUEST_COMPANIES,
        url
    }
}

export function companiesReceived(response) {
    return {
        type: constants.COMPANIES_RECEIVED,
        response
    }
}

export function requestStatuses(url) {
    return {
        type: constants.REQUEST_STATUSES,
        url
    }
}

export function statusesReceived(response) {
    return {
        type: constants.STATUSES_RECEIVED,
        response
    }
}


export function requestRoles(url) {
    return {
        type: constants.REQUEST_ROLES,
        url
    }
}

export function rolesReceived(response) {
    return {
        type: constants.ROLES_RECEIVED,
        response
    }
}

export function requestCompaniesCustomFields(url) {
    return {
        type: constants.REQUEST_COMPANIESCUSTOMFIELDS,
        url
    }
}

export function companiesCustomFieldsReceived(response) {
    return {
        type: constants.COMPANIESCUSTOMFIELDS_RECEIVED,
        response
    }
}