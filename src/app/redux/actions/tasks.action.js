import {REQUEST_DEFAULT_TASKS, TASKS_RECEIVED} from '../constants';

export function requestDefaultTasks() {
    return {
        type: REQUEST_DEFAULT_TASKS
    }
}

export function tasksReceived(data) {
    return {
        type: TASKS_RECEIVED,
        data
    }
}