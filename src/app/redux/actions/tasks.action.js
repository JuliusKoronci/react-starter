import {
    REQUEST_DEFAULT_TASKS,
    TASKS_RECEIVED,
    REQUEST_TASKS_FROM_URL,
    REQUEST_TASK_BY_ID,
    TASK_RECEIVED,
    TASK_UPDATED,
    TASK_STATUS_UPDATED,
    TASK_UPLOADED,
    AFTER_TASK_ATTACHMENT_DELETED
} from '../constants';

import configResolver from '../../../config/configResolver';

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

export function loadTaskById(id) {
    return {
        type: REQUEST_TASK_BY_ID,
        id
    }
}

export function tasksReceived(data) {
    return {
        type: TASKS_RECEIVED,
        data
    }
}
export function taskReceived(data) {
    return {
        type: TASK_RECEIVED,
        data
    }
}
export function taskUpdated(data, taskId) {
    return {
        type: TASK_UPDATED,
        data,
        taskId
    }
}
export function taskUpload(formData, taskId) {
    return {
        type: TASK_UPLOADED,
        formData,
        taskId
    }
}

export function updateStatus(statusConfig, assignConfig) {
    return {
        type: TASK_STATUS_UPDATED,
        statusConfig,
        assignConfig
    }
}

export function handleStatus(data, taskId) {
    const userId = data.assigned || this.props.user.id;
    let assignConfig = false;
    if (!data.assigned) {
        assignConfig = configResolver.getAssignUserConfig(taskId, userId);
    }
    const statusConfig = configResolver.changeStatusConfig(taskId, userId, data.status);

    return updateStatus(statusConfig, assignConfig);

}

export function taskAttachmentDeleted({taskId, slug}){
    return{
        type: AFTER_TASK_ATTACHMENT_DELETED,
        taskId,
        deletedAttachmentSlug:slug
    }
}