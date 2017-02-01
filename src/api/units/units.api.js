import {UNITS_LIST, HOST_URL} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockUnits from '../_mock_data/units/units.mock.js';
import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockUnits);
        }, MOCK_DELAY);
    });
}

export function loadUnits(url) {
    //nastavene tahanie mock dat
    return mockDefault();
    
    if (USE_MOCK) {
        return mockDefault();
    }
    let finalUrl = UNITS_LIST;
    if(url){
        finalUrl = HOST_URL + url;
    }
    return defaultGET(finalUrl);
}