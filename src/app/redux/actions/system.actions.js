import {FILTERS_RECEIVED, REQUEST_FILTERS} from '../constants';

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