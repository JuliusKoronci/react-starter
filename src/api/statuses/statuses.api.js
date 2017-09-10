import {STATUSES_LIST, HOST_URL} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockStatuses from '../_mock_data/statuses/statuses.mock';
import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockStatuses);
        }, MOCK_DELAY);
    });
}

export function loadStatuses(url) {
    if (USE_MOCK) {
        return mockDefault();
    }
    let finalUrl = STATUSES_LIST + '?order=ASC';
    if(url){
        finalUrl = HOST_URL + url;
    }
    return defaultGET(finalUrl);
}