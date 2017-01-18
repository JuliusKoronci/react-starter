import {FILTER_LIST} from '../urls';
import {getFromStorage} from '../../app/services/storage';
import {TOKEN_KEY, USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve([]);
        }, MOCK_DELAY);
    });
}

function loadDefault() {
    let config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getFromStorage(TOKEN_KEY)
        }
    };

    return fetch(FILTER_LIST, config)
        .then(response =>
            response.json().then(data => ({data, response}))
        ).then(({data, response}) => {
            if (!response.ok) {
                return Promise.reject({status: response.status, message: data.message})
            } else {
                return Promise.resolve(data);
            }
        })
}


export function loadFilters() {
    if (USE_MOCK) {
        return mockDefault();
    }
    return loadDefault();
}