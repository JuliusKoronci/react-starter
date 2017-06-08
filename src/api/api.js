import {getFromStorage} from '../app/services/storage';
import {TOKEN_KEY} from '../config/security';
import queryString from '../../node_modules/query-string';
import {buildError} from './helpers';
import {filterFormValues, remapValues, encode} from '../app/services/general';
import downloadFile from 'downloadjs';

export function defaultGET(url, resolvedConfig) {

    const token = getFromStorage(TOKEN_KEY);
    let config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };

    let data=false;
    if (resolvedConfig && resolvedConfig.allowedFormFields && resolvedConfig.data) {
        data = filterFormValues(resolvedConfig.data, resolvedConfig.allowedFormFields);
    }
    if (resolvedConfig && resolvedConfig.remapValues) {
        data = remapValues(resolvedConfig.data, resolvedConfig.remapValues);
    }
    if (data){
        url=url + '?'+encode(data);
    }

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
export function defaultDELETE(url) {
    const token = getFromStorage(TOKEN_KEY);
    let config = {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };

    return fetch(url, config)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(buildError(response))
            } else {
                return Promise.resolve();
            }
        })

    // return fetch(url, config)
    //     .then(response =>
    //         response.json().
    //         then(data => ({data, response}))
    //     ).then(({data, response}) => {
    //     console.log(data,response)
    //         if (!response.ok) {
    //             return Promise.reject(buildError(response, data))
    //         } else {
    //             return Promise.resolve(data);
    //         }
    //     })

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
    if (resolvedConfig && resolvedConfig.remapValues) {
        data = remapValues(data, resolvedConfig.remapValues);
    }



    let bodyData='';

    bodyData = data?queryString.stringify(data).replace("detailData", "detail_data"):'';

    bodyData = (data && resolvedConfig && resolvedConfig.jsonStringify) ? JSON.stringify(data): bodyData;

    let headers={
        'Authorization': 'Bearer ' + token,
            'Accept': 'application/json'};

    if (resolvedConfig && resolvedConfig.contentType) {
        if(resolvedConfig.contentType!=='default'){
            headers['Content-Type']=resolvedConfig.contentType;
        }
    }else{
        headers['Content-Type']='application/x-www-form-urlencoded';
    }

console.log('sending:',bodyData);
    let config = {
         method: method,
        body: bodyData,
        // body: (data ? JSON.stringify(data): ''),
        headers: headers
    };
    // return Promise.resolve(data);

    if(method==='DELETE'){
        return fetch(url, config)
            .then(function (response) {
                if (!response.ok) {
                    return Promise.reject(response.json().then(data => ({data, response})).then((json) => {
                        const {response, data} = json;
                        buildError(response, data)
                    }))
                } else {
                    return Promise.resolve();
                }
            });
    }


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
        .then(function (response) {
            if (!response.ok) {
                return Promise.reject(response.json().then(data => ({data, response})).then((json) => {
                    const {response, data} = json;
                    buildError(response, data)
                }))
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


export function apiGetBlob(url) {
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
            return blob;
            // return Promise.resolve(blob);
        });
}


export function apiUploadFile(url, data) {
    let config = {
        method: 'POST',
        body: data,
        headers: {
            'Authorization': 'Bearer ' + getFromStorage(TOKEN_KEY)
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
        });
}

