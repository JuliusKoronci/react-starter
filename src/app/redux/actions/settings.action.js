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

export function companyReceived(data) {
    return {
        type: constants.COMPANY_RECEIVED,
        data
    }
}

export function companyPost(values) {
    return {
        type: constants.COMPANY_POST_NEW,
        data: values
    }
}

export function companyCreated(data) {
    return {
        type: constants.COMPANY_CREATED,
        data
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

export function requestCompanyAttributes(url) {
    return {
        type: constants.REQUEST_COMPANYATTRIBUTES,
        url
    }
}

export function companyAttributesReceived(response) {
    return {
        type: constants.COMPANYATTRIBUTES_RECEIVED,
        response
    }
}

export function companyAttributeReceived(data) {
    return {
        type: constants.COMPANYATTRIBUTE_RECEIVED,
        data
    }
}

export function requestTaskAttributes(url) {
    return {
        type: constants.REQUEST_TASKATTRIBUTES,
        url
    }
}

export function taskAttributesReceived(response) {
    return {
        type: constants.TASKATTRIBUTES_RECEIVED,
        response
    }
}

export function requestImaps(url) {
    return {
        type: constants.REQUEST_IMAPS,
        url
    }
}

export function imapsReceived(response) {
    return {
        type: constants.IMAPS_RECEIVED,
        response
    }
}

export function imapReceived(data) {
    return {
        type: constants.IMAP_RECEIVED,
        data
    }
}

export function requestSmtps(url) {
    return {
        type: constants.REQUEST_SMTPS,
        url
    }
}

export function smtpsReceived(response) {
    return {
        type: constants.SMTPS_RECEIVED,
        response
    }
}

export function requestProjectSharedFilters(url) {
    return {
        type: constants.REQUEST_PROJECTSHAREDFILTERS,
        url
    }
}

export function projectSharedFiltersReceived(response) {
    return {
        type: constants.PROJECTSHAREDFILTERS_RECEIVED,
        response
    }
}

export function requestSharedFilters(url) {
    return {
        type: constants.REQUEST_SHAREDFILTERS,
        url
    }
}

export function sharedFiltersReceived(response) {
    return {
        type: constants.SHAREDFILTERS_RECEIVED,
        response
    }
}
export function requestUnits(url) {
    return {
        type: constants.REQUEST_UNITS,
        url
    }
}

export function unitsReceived(response) {
    return {
        type: constants.UNITS_RECEIVED,
        response
    }
}
export function requestUserAttributes(url) {
    return {
        type: constants.REQUEST_USERATTRIBUTES,
        url
    }
}

export function userAttributesReceived(response) {
    return {
        type: constants.USERATTRIBUTES_RECEIVED,
        response
    }
}