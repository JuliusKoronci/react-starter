import {COMPANIESCUSTOMFIELDS_LIST, HOST_URL} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockCompaniesCustomFields from '../_mock_data/companies_custom_fields/companies_custom_fields.mock';
import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockCompaniesCustomFields);
        }, MOCK_DELAY);
    });
}

export function loadCompaniesCustomFields(url) {
    if (USE_MOCK) {
        return mockDefault();
    }
    let finalUrl = COMPANIESCUSTOMFIELDS_LIST;
    if(url){
        finalUrl = HOST_URL + url;
    }
    return defaultGET(finalUrl);
}