import {getFromStorage} from '../app/services/storage';
import {TOKEN_KEY} from '../config/security';
import queryString from '../../node_modules/query-string';
import {buildError} from './helpers';
import {filterFormValues} from '../app/services/general';
import downloadFile from 'downloadjs';

export function defaultGET(url) {
    const token = getFromStorage(TOKEN_KEY);
    let config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };

    return fetch(url, config)
        .then(response =>
            response.json().then(data => ({data, response}))
        ).then(({data, response}) => {
            if (!response.ok) {
                return Promise.reject(buildError(response, data))
            } else {
                return Promise.resolve(data);
            }
        })
}


export function defaultPOST(url, data) {
    const token = getFromStorage(TOKEN_KEY);
    let config = {
        method: 'POST',
        body: queryString.stringify(data),
        headers: {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return fetch(url, config)
        .then(response =>
            response.json().then(data => ({data, response}))
        ).then(({data, response}) => {
            if (!response.ok) {
                return Promise.reject(buildError(response, data))
            } else {
                return Promise.resolve(data);
            }
        })

}
export function defaultPATCH(url, data) {
    const token = getFromStorage(TOKEN_KEY);
    let config = {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };

    return fetch(url, config)
        .then(response =>
            response.json().then(data => ({data, response}))
        ).then(({data, response}) => {
            if (!response.ok) {
                return Promise.reject(buildError(response, data))
            } else {
                return Promise.resolve(data);
            }
        })

}


export function defaultRequest(url, method, data, resolvedConfig) {
    const token = getFromStorage(TOKEN_KEY);

    if (resolvedConfig && resolvedConfig.allowedFormFields) {
        data = filterFormValues(data, resolvedConfig.allowedFormFields);
    }
    let config = {
        method: method,
        body: (data ? queryString.stringify(data) : ''),
        headers: {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return fetch(url, config)
        .then(response =>
            response.json().then(data => ({data, response}))
        ).then(({data, response}) => {
            if (!response.ok) {
                return Promise.reject(buildError(response, data))
            } else {
                return Promise.resolve(data);
            }
        })

}


export function defaultDeleteFile(url) {
    const token = getFromStorage(TOKEN_KEY);

    let config = {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json'
        }
    };


    return fetch(url, config)
        .then(function(response){
            if (!response.ok) {
                return Promise.reject(buildError(response, {}))
            } else {
                return Promise.resolve();
            }
        });

}


export function apiDownloadFile(url) {
    const token = getFromStorage(TOKEN_KEY);

    let config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };

    return fetch(url, config)
        .then(function (response) {
        return response.blob();
    }).then(function (blob) {
        downloadFile(blob);
    });
}

