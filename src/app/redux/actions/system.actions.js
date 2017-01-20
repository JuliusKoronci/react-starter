import {FILTERS_RECEIVED, REQUEST_FILTERS, TOGGLE_SIDEBAR, SIDEBAR_IS_MINIFIED} from '../constants';

export function requestFilters() {
    return {
        type: REQUEST_FILTERS
    }
}

export function filtersReceived(data) {
    return {
        type: FILTERS_RECEIVED,
        data
    }
}

export function toggleSidebar(data) {
    console.log('action data:' + data);
    return {
        type: TOGGLE_SIDEBAR,
        data: data,
        storage: SIDEBAR_IS_MINIFIED

    }
}