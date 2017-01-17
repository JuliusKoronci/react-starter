import {TASK_LIST} from '../urls';
import mockData from '../_mock_data/tasks/tasks.mock';

function mockDefault() {
    return new Promise((resolve) => {

        window.setTimeout(function () {
            resolve(mockData)
        }, 3000);

    });
}


export function defaultFilter() {
    return mockDefault();
}