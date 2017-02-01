import {COMPANYATTRIBUTES_LIST, HOST_URL} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockCompanyAttributes from '../_mock_data/company_attributes/company_attributes.mock.js';
import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockCompanyAttributes);
        }, MOCK_DELAY);
    });
}

export function loadCompanyAttributes(url) {
    if (USE_MOCK) {
        return mockDefault();
    }
    let finalUrl = COMPANYATTRIBUTES_LIST;
    if(url){
        finalUrl = HOST_URL + url;
    }
    return defaultGET(finalUrl);
}