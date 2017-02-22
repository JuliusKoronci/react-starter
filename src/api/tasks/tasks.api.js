import {TASK_LIST, HOST_URL, TASK_UPLOAD} from '../urls';
import {getFromStorage} from '../../app/services/storage';
import {TOKEN_KEY, USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockData from '../_mock_data/tasks/tasks.mock';
import queryString from 'query-string';

import {buildError} from '../helpers';
function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockData);
        }, MOCK_DELAY);
    });
}

function loadDefault(filterId) {

    let config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getFromStorage(TOKEN_KEY)
        }
    };

    let url = TASK_LIST;
    if (filterId) {
        url += '/filter/' + filterId;
    }

    return fetch(url, config)
        .then(response =>
            response.json().then(tasks => ({tasks, response}))
        ).then(({tasks, response}) => {
            if (!response.ok) {
                return Promise.reject(buildError(response, tasks))
            } else {
                return Promise.resolve(tasks);
            }
        })
}


function loadTasksFromUrl(url) {
    let config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getFromStorage(TOKEN_KEY)
        }
    };

    return fetch(HOST_URL + url, config)
        .then(response =>
            response.json().then(tasks => ({tasks, response}))
        ).then(({tasks, response}) => {
            if (!response.ok) {
                return Promise.reject(buildError(response, tasks))
            } else {
                return Promise.resolve(tasks);
            }
        })
}


export function getTasksFromUrl(url) {
    if (USE_MOCK) {
        return mockDefault();
    }
    return loadTasksFromUrl(url);
}


export function defaultFilter(filterId) {
    if (USE_MOCK) {
        return mockDefault();
    }
    return loadDefault(filterId);
}

export function getTaskById(id) {
    let config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getFromStorage(TOKEN_KEY)
        }
    };

    return fetch(TASK_LIST + '/' + id, config)
        .then(response =>
            response.json().then(tasks => ({tasks, response}))
        ).then(({tasks, response}) => {
            if (!response.ok) {
                return Promise.reject(buildError(response, tasks))
            } else {
                return Promise.resolve(tasks);
            }
        });
}

export function updateTask(taskId, data) {
    let config = {
        method: 'PATCH',
        body: queryString.stringify(data),
        headers: {
            'Authorization': 'Bearer ' + getFromStorage(TOKEN_KEY),
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    return fetch(TASK_LIST + '/' + taskId, config)
        .then(response =>
            response.json().then(tasks => ({tasks, response}))
        ).then(({tasks, response}) => {
            if (!response.ok) {
                return Promise.reject(buildError(response, tasks))
            } else {
                return Promise.resolve(tasks);
            }
        });
}

export function uploadApi(data, taskId) {
    let config = {
        method: 'POST',
        body: data,
        headers: {
            'Authorization': 'Bearer ' + getFromStorage(TOKEN_KEY)
        }
    };
    return fetch(TASK_UPLOAD + '/' + taskId, config)
        .then(response =>
            response.json().then(tasks => ({tasks, response}))
        ).then(({tasks, response}) => {
            if (!response.ok) {
                return Promise.reject(buildError(response, tasks))
            } else {
                return Promise.resolve(tasks);
            }
        });
}