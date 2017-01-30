import {TASKATTRIBUTES_LIST, HOST_URL} from '../urls';
import {USE_MOCK} from '../../config/security';
import {MOCK_DELAY} from '../../config/config';
import mockcompanyAttributes from '../_mock_data/task_attributes/task_attributes.mock.js';
import {defaultGET} from '../api';

function mockDefault() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(mockcompanyAttributes);
        }, MOCK_DELAY);
    });
}

export function loadTaskAttributes(url) {
    if (USE_MOCK) {
        return mockDefault();
    }
    let finalUrl = TASKATTRIBUTES_LIST;
    if(url){
        finalUrl = HOST_URL + url;
    }
    return defaultGET(finalUrl);
}