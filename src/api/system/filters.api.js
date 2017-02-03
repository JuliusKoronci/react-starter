import {FILTER_LIST} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve([]);
        }, MOCK_DELAY);
    });
}


export function loadFilters() {
    if (USE_MOCK) {
        return mockDefault();
    }
    return defaultGET(FILTER_LIST);
}