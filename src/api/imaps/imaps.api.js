import {IMAPS_LIST, HOST_URL} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockImaps from '../_mock_data/imaps/imaps.mock.js';
import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockImaps);
        }, MOCK_DELAY);
    });
}

export function Imaps(url) {
    //nastavene tahanie mock dat
    return mockDefault();
    
    if (USE_MOCK) {
        return mockDefault();
    }
    let finalUrl = IMAPS_LIST;
    if(url){
        finalUrl = HOST_URL + url;
    }
    return defaultGET(finalUrl);
}