import {TASK_LIST} from '../urls';
import {getFromStorage} from '../../app/services/storage';
import {TOKEN_KEY, USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockData from '../_mock_data/tasks/tasks.mock';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockData);
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

    return fetch(TASK_LIST, config)
        .then(response =>
            response.json().then(tasks => ({tasks, response}))
        ).then(({tasks, response}) => {
            if (!response.ok) {
                return Promise.reject({status: response.status, message: tasks.message})
            } else {
                return Promise.resolve(tasks);
            }
        })
}


export function defaultFilter() {
    if (USE_MOCK) {
        return mockDefault();
    }
    return loadDefault();
}