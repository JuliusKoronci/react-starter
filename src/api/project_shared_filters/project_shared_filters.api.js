// import {PROJECTSHAREDFILTERS_LIST, HOST_URL} from '../urls';
// import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockProjectSharedFilters from '../_mock_data/project_shared_filters/project_shared_filters.mock';
// import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockProjectSharedFilters);
        }, MOCK_DELAY);
    });
}

export function loadProjectSharedFilters(url) {
    //nastavene tahanie mock dat
    return mockDefault();

    // if (USE_MOCK) {
    //     return mockDefault();
    // }
    // let finalUrl = PROJECTSHAREDFILTERS_LIST;
    // if(url){
    //     finalUrl = HOST_URL + url;
    // }
    // return defaultGET(finalUrl);
}