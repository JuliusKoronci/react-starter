import {ROLES_LIST, HOST_URL} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockRoles from '../_mock_data/roles/roles.mock';
import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockRoles);
        }, MOCK_DELAY);
    });
}

export function loadRoles(url) {
    if (USE_MOCK) {
        return mockDefault();
    }
    let finalUrl = ROLES_LIST;
    if(url){
        finalUrl = HOST_URL + url;
    }
    return defaultGET(finalUrl);
}