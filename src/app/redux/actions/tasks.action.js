import {REQUEST_DEFAULT_TASKS, TASKS_RECEIVED, REQUEST_TASKS_FROM_URL} from '../constants';

export function requestDefaultTasks() {
    return {
        type: REQUEST_DEFAULT_TASKS
    }
}

export function requestTasksFromUrl(url) {
    return {
        type: REQUEST_TASKS_FROM_URL,
        url
    }
}

export function tasksReceived(data) {
    return {
        type: TASKS_RECEIVED,
        data
    }
}