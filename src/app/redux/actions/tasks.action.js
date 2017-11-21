import {
  REQUEST_DEFAULT_TASKS,
  TASKS_RECEIVED,
  REQUEST_TASKS_FROM_URL,
  REQUEST_TASKS_WITH_PARAMS,
  REQUEST_TASK_BY_ID,
  TASK_RECEIVED,
  TASK_UPDATED,
  TASK_STATUS_UPDATED,
  TASK_UPLOADED,
  AFTER_TASK_ATTACHMENT_DELETED,
  AFTER_TASK_ATTACHMENT_UPLOADED,
  CREATE_TASK,
  DELETE_TASK,
  ADD_TASK_COMMENT,
  TASK_COMMENT_ADDED,
  TASK_UPDATE,
  PROJECT_ASSIGNERS_REQUEST
} from "../constants";

import configResolver from "../../../config/configResolver";

export function addTaskComment(data, config) {
  return {
    type: ADD_TASK_COMMENT,
    data,
    config
  };
}

export function taskUpdate(data, config, taskId) {
  return {
    type: TASK_UPDATE,
    data,
    config,
    taskId
  };
}

export function createTask(data) {
  return {
    type: CREATE_TASK,
    data
  };
}

export function requestDefaultTasks(filterId, search) {
  return {
    type: REQUEST_DEFAULT_TASKS,
    filterId,
    search
  };
}

export function requestTasksFromUrl(url) {
  return {
    type: REQUEST_TASKS_FROM_URL,
    url
  };
}
export function deleteTask(url) {
  return {
    type: DELETE_TASK,
    url
  };
}

export function requestTasks(config) {
  return {
    type: REQUEST_TASKS_WITH_PARAMS,
    url: config.url,
    config
  };
}

export function loadTaskById(id) {
  return {
    type: REQUEST_TASK_BY_ID,
    id
  };
}

export function tasksReceived(data) {
  return {
    type: TASKS_RECEIVED,
    data
  };
}
export function taskReceived(data) {
  return {
    type: TASK_RECEIVED,
    data
  };
}
export function taskUpdated(data, taskId) {
  return {
    type: TASK_UPDATED,
    data,
    taskId
  };
}

export function getProjectAssigners(config) {
  return {
    type: PROJECT_ASSIGNERS_REQUEST,
    config
  };
}

export function taskUpload(formData, taskId) {
  return {
    type: TASK_UPLOADED,
    formData,
    taskId
  };
}

export function updateStatus(statusConfig, assignConfig) {
  return {
    type: TASK_STATUS_UPDATED,
    statusConfig,
    assignConfig
  };
}

export function commentAdded(data) {
  return {
    type: TASK_COMMENT_ADDED,
    data
  };
}

export function handleStatus(data, taskId) {
  const userId = data.assigned || this.props.user.id;
  let assignConfig = false;
  if (!data.assigned) {
    assignConfig = configResolver.getAssignUserConfig(taskId, userId);
  }
  const statusConfig = configResolver.changeStatusConfig(
    taskId,
    userId,
    data.status
  );

  return updateStatus(statusConfig, assignConfig);
}

export function taskAttachmentDeleted({ taskId, slug }) {
  return {
    type: AFTER_TASK_ATTACHMENT_DELETED,
    taskId,
    deletedAttachmentSlug: slug
  };
}

export function taskAttachmentUploaded({ data }) {
  return {
    type: AFTER_TASK_ATTACHMENT_UPLOADED,
    data
  };
}
