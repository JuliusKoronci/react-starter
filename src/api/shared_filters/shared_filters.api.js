// import {SHAREDFILTERS_LIST, HOST_URL} from '../urls';
// import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockSharedFilters from '../_mock_data/shared_filters/shared_filters.mock';
// import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockSharedFilters);
        }, MOCK_DELAY);
    });
}

export function loadSharedFilters(url) {
    //nastavene tahanie mock dat

    return mockDefault();

    // if (USE_MOCK) {
    //     return mockDefault();
    // }
    // let finalUrl = SHAREDFILTERS_LIST;
    // if(url){
    //     finalUrl = HOST_URL + url;
    // }
    // return defaultGET(finalUrl);
}