import {USERS_LIST, HOST_URL} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockUsers from '../_mock_data/users/users.mock';
import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockUsers);
        }, MOCK_DELAY);
    });
}

export function loadUsers(url) {
    if (USE_MOCK) {
        return mockDefault();
    }
    let finalUrl = USERS_LIST;
    if(url){
        finalUrl = HOST_URL + url;
    }
    return defaultGET(finalUrl);
}

export function searchUsers(searchTerm) {
    if (USE_MOCK) {
        return mockDefault();
    }
    let finalUrl = USERS_LIST+'/search?term='+searchTerm;

    return defaultGET(finalUrl);
}