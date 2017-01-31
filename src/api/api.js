import {getFromStorage} from '../app/services/storage';
import {TOKEN_KEY} from '../config/security';
import queryString from '../../node_modules/query-string';

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
                return Promise.reject({status: response.status, message: data.message})
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
            'Accept':'application/json',
            'Content-Type':'application/x-www-form-urlencoded'
        }
    };

    return fetch(url, config)
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

export function defaultPUT(url, data) {
    const token = getFromStorage(TOKEN_KEY);
    let config = {
        method: 'PUT',
        body: queryString.stringify(data),
        headers: {
            'Authorization': 'Bearer ' + token,
            'Accept':'application/json',
            'Content-Type':'application/x-www-form-urlencoded'
            // 'Content-Type':'text/plain'
        }
    };

    return fetch(url, config)
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

export function defaultPATCH(url, data) {
    const token = getFromStorage(TOKEN_KEY);
    let config = {
        method: 'PATCH',
        body: queryString.stringify(data),
        headers: {
            'Authorization': 'Bearer ' + token,
            'Accept':'application/json',
            'Content-Type':'application/x-www-form-urlencoded'
        }
    };

    return fetch(url, config)
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


export function defaultRequest(url, method, data) {
    const token = getFromStorage(TOKEN_KEY);
    let config = {
        method: method,
        body: (data?queryString.stringify(data):''),
        headers: {
            'Authorization': 'Bearer ' + token,
            'Accept':'application/json',
            'Content-Type':'application/x-www-form-urlencoded'
        }
    };

    return fetch(url, config)
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