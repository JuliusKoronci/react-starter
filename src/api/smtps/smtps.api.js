import {SMTPS_LIST, HOST_URL} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockSmtps from '../_mock_data/imaps/imaps.mock';
import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockSmtps);
        }, MOCK_DELAY);
    });
}

export function loadSmtps(url) {

    if (USE_MOCK) {
        return mockDefault();
    }
    let finalUrl = SMTPS_LIST;
    if(url){
        finalUrl = HOST_URL + url;
    }
    return defaultGET(finalUrl);
}