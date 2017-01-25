import {getFromStorage} from '../app/services/storage';
import {TOKEN_KEY} from '../config/security';

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