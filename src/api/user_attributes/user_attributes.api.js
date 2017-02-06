import {USERATTRIBUTES_LIST, HOST_URL} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockUserAttributes from '../_mock_data/user_attributes/user_attributes.mock';
import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockUserAttributes);
        }, MOCK_DELAY);
    });
}

export function loadUserAttributes(url) {
    //nastavene tahanie mock dat
    return mockDefault();

    if (USE_MOCK) {
        return mockDefault();
    }
    let finalUrl = USERATTRIBUTES_LIST;
    if(url){
        finalUrl = HOST_URL + url;
    }
    return defaultGET(finalUrl);
}