import {COMPANIES_LIST, HOST_URL} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockCompanies from '../_mock_data/companies/companies.mock';
import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockCompanies);
        }, MOCK_DELAY);
    });
}

export function loadCompanies(url) {
    if (USE_MOCK) {
        return mockDefault();
    }
    let finalUrl = COMPANIES_LIST;
    if(url){
        finalUrl = HOST_URL + url;
    }
    return defaultGET(finalUrl);
}