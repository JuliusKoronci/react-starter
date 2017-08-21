import { call, put, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { generateRoute } from '../../../config/router';
import {
	REQUEST_DEFAULT_TASKS,
	REQUEST_TASKS_FROM_URL,
	REQUEST_TASK_BY_ID,
	REQUEST_TASKS_WITH_PARAMS,
	TASK_UPDATED,
	TASK_STATUS_UPDATED,
	TASK_UPLOADED,
	CREATE_TASK,
	DELETE_TASK,
    ADD_TASK_COMMENT,
    TASK_UPDATE
} from '../constants';
import { TASK_LIST } from '../../../api/urls';
import { endAjax, startAjaxReset, asyncError } from '../actions/async.action';
import { tasksReceived, taskReceived, taskUpdated, taskAttachmentUploaded,commentAdded } from '../actions/tasks.action';
import {
	defaultFilter,
	getTasksFromUrl,
	getTaskById,
	updateTask as updateApi,
	uploadApi,
} from '../../../api/tasks/tasks.api';
import { defaultPOST, defaultPATCH, defaultGET, defaultDELETE, defaultRequest } from '../../../api/api';
import { entityUpdated } from '../../services/general';

function *defaultTasks(action) {
	yield put(startAjaxReset());
	try {
		const data = yield call(defaultFilter, action.filterId);
		yield put(tasksReceived(data));
	} catch (e) {
		yield put(asyncError(e));
	}
	yield put(endAjax());
}


export function *loadTasks() {
	yield takeLatest(REQUEST_DEFAULT_TASKS, defaultTasks);
}


function *loadTasksUrl(action) {
	yield put(startAjaxReset());
	try {
		const data = yield call(getTasksFromUrl, action.url);
		yield put(tasksReceived(data));
	} catch (e) {
		yield put(asyncError(e));
	}
	yield put(endAjax());
}

function *loadTasksWithParams(action) {
	yield put(startAjaxReset());
	try {
		const data = yield call(defaultGET, action.url, action.config);
		yield put(tasksReceived(data));
	} catch (e) {
		yield put(asyncError(e));
	}
	yield put(endAjax());
}

function *loadTaskById(action) {
	yield put(startAjaxReset());
	try {
		const data = yield call(getTaskById, action.id);
		yield put(taskReceived(data));
	} catch (e) {
		yield put(asyncError(e));
	}
	yield put(endAjax());
}

function *updateTask(action) {
	yield put(startAjaxReset());
	try {
		const data = yield call(updateApi, action.taskId, action.data);
		yield put(taskReceived(data));
	} catch (e) {
		yield put(asyncError(e));
	}
	yield put(endAjax());
}

function *taskUpdate(action) {
	let config=action.config;
    yield put(startAjaxReset());
    try {
        const data = yield call(defaultRequest, config.url, 'PATCH', action.data, config);
        // console.log(data);
        yield call(entityUpdated, 'Task saved!');
		
        yield put(taskUpdated(data));

        browserHistory.goBack();
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}

function *updateStatus(action) {
	yield put(startAjaxReset());
	try {
		if (action.assignConfig) {
			yield call(defaultPOST, action.assignConfig.url);
		}
		yield call(defaultPATCH, action.statusConfig.url);
		yield call(entityUpdated, 'Status updated!');
	} catch (e) {
		yield put(asyncError(e));
	}
	yield put(endAjax());
}

function *uploadTask(action) {
	yield put(startAjaxReset());
	try {
		const data = yield call(uploadApi, action.formData, action.taskId);
		yield call(entityUpdated, 'Attachment uploaded!');
		yield put(taskAttachmentUploaded(data));
	} catch (e) {
		yield put(asyncError(e));
	}
	yield put(endAjax());
}

function *createTask(action) {
	let values=action.data?action.data:{title:' '};
    yield put(startAjaxReset());
    try {
        const task = yield call(defaultPOST, TASK_LIST, values);
        yield put(taskReceived(task));
        const id = task.data.id;
        // const link = generateRoute('task_new', { taskId: id, newTask: true });
        const link = generateRoute('task_show', { taskId: id});
        browserHistory.push(link);
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}

function *deleteTask(action) {
	yield put(startAjaxReset());
	try {
		yield call(defaultDELETE, action.url);
        yield call(entityUpdated, 'Task deleted!');
        browserHistory.push('/');
	} catch (e) {
		browserHistory.push('/');
		yield put(asyncError(e));
	}
	yield put(endAjax());
}



function *addTaskComment(action) {
    let values=action.data?action.data:{body:' ',title:' '};
    yield put(startAjaxReset());
    try {
        const comment = yield call(defaultPOST, action.config.url, values);
        yield put(commentAdded({taskId:action.config.taskId,comment:comment.data}));
        // const id = task.data.id;
        // const link = generateRoute('task_show', { taskId: id});
        // browserHistory.push(link);

    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadTasksFromUrl() {
	yield takeLatest(REQUEST_TASKS_FROM_URL, loadTasksUrl);
	yield takeLatest(REQUEST_TASKS_WITH_PARAMS, loadTasksWithParams);
	yield takeLatest(REQUEST_TASK_BY_ID, loadTaskById);
	// yield takeLatest(TASK_UPDATED, updateTask);
	yield takeLatest(TASK_STATUS_UPDATED, updateStatus);
	yield takeLatest(TASK_UPLOADED, uploadTask);
	yield takeLatest(CREATE_TASK, createTask);
	yield takeLatest(TASK_UPDATE, taskUpdate);
	yield takeLatest(DELETE_TASK, deleteTask);
	yield takeLatest(ADD_TASK_COMMENT, addTaskComment);

}
