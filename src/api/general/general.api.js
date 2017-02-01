import {COMPANIES_LIST, COMPANY_POST_NEW,  HOST_URL} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockCompanies from '../_mock_data/companies/companies.mock';
import {defaultGET, defaultPOST} from '../api';



export function getEntityById(url) {

    let finalUrl = COMPANIES_LIST;
    if(url){
        finalUrl = HOST_URL + url;
    }
    return defaultGET(finalUrl);
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
                return Promise.reject({status: response.status, message: tasks.message})
            } else {
                return Promise.resolve(tasks);
            }
        })
}
