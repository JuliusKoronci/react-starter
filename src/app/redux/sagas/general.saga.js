import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { generateRoute } from '../../../config/router';

import {
    REQUEST_ENTITY,
    CREATE_ENTITY,
    UPDATE_ENTITY,
    DELETE_ENTITY,
    PATCH_ENTITY,
    REQUEST_DOWNLOAD_FILE,
    REQUEST_DELETE_FILE,
    FILE_UPLOAD,
    GENERAL_REQUEST
} from '../constants';

import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {defaultGET, defaultRequest, defaultPATCH, apiDownloadFile, defaultDeleteFile, apiUploadFile} from '../../../api/api';
import {entityUpdated, entityCreated, entityDeleted} from '../../services/general';


function *loadEntity(action) {
    yield put(startAjax());
    try {
        let config = action.config;
        const data = yield call(defaultGET, config.url);
        yield put(config.afterEntityReceivedAction(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


function *updateEntity(action) {
    yield put(startAjax());
    try {
        let config = action.config;
        const data = yield call(defaultRequest, config.url, 'PUT', action.values, config);

        if (config.afterEntityReceivedAction) {
            yield put(config.afterEntityReceivedAction(data));
        }



        if(config.routeAfter) {
            const id = data.id;
            const link = generateRoute(config.routeAfter.name, {[config.routeAfter.param]: id });
            browserHistory.push(link);
        }

        // console.log(action)
        entityUpdated('Updated successfully', config.redirectAfter);
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}

function *patchEntity(action) {
    yield put(startAjax());
    try {

        let config = action.config;
        const data = yield call(defaultPATCH, config.url, action.values);
        if (config.afterEntityReceivedAction) {
            yield put(config.afterEntityReceivedAction(data));
        }
        entityUpdated('Updated successfully', config.redirectAfter);
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}

function *deleteEntity(action) {
    yield put(startAjax());
    try {
        let config = action.config;
        yield call(defaultRequest, config.urlList + '/' + action.id, 'DELETE');

        if (config.afterEntityDeletedAction) {
            yield put(config.afterEntityDeletedAction(action));
        }
        let redirectTo=config.redirectAfterCreation || config.redirectAfterDelete;
        entityDeleted('Deleted successfully ' + action.id, redirectTo);
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


function *createEntity(action) {
    yield put(startAjax());
    try {
        let config = action.config;
        const data = yield call(defaultRequest, config.url, 'POST', action.values, config);
        if (config.afterEntityReceivedAction) {
            yield put(config.afterEntityReceivedAction(data));
        }
        entityCreated('Created successfully', config.redirectAfterCreation);

        if(config.routeAfter) {
            // console.log(data);
            const id = data.data.id;
            // console.log(id);
            // console.log([config.routeAfter.param]);
            const link = generateRoute(config.routeAfter.name, {[config.routeAfter.param]: id });
            browserHistory.push(link);
        }

    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


function *downloadFile(action) {
    let config = action.config;
    yield put(startAjax());
    try {
        yield call(apiDownloadFile, config.url + '/' + action.slug, action.config, action.slug);
        entityUpdated('Downloading file');
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}

function *deleteFile(action) {
    let config = action.config;
    yield put(startAjax());
    try {
        yield call(defaultDeleteFile, config.url);
        if (config.afterFileDeletedAction) {
            yield put(config.afterFileDeletedAction(config.afterFileDeletedActionParams));
        }
        entityUpdated('File deleted');
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}

function *fileUpload(action) {
    let config = action.config;
    yield put(startAjax());

    //
    // for (let key of action.formData.entries()) {
    //     console.log(key[0] + ', ' + key[1]);
    // }

    try {
        const data = yield call(apiUploadFile, config.uploadUrl, action.formData);
        if (config.afterFileUploadedAction) {
            yield call(config.afterFileUploadedAction, config, data);
        }
        entityUpdated('File uploaded');
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


// function *getImageBlob(action) {
//     yield put(startAjax());
//     try {
//         return yield call(apiGetBlob, action.url);
//     } catch (e) {
//         yield put(asyncError(e));
//     }
//     yield put(endAjax());
// }




function *generalRequest(action) {
    yield put(startAjax());
    try {
        let config = action.config;
        const data = yield call(defaultRequest, config.url, config.method, action.values, config);

        if (config.afterRequest) {
            yield put(config.afterRequest(data,config));
        }

        entityUpdated(config.message?config.message:'Request successful');
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}



export function *downloadFileDefault() {
    yield takeEvery(REQUEST_DOWNLOAD_FILE, downloadFile);
}


export function *createEntityDefault() {
    yield takeEvery(CREATE_ENTITY, createEntity);
}


export function *loadEntityDefault() {
    yield takeEvery(REQUEST_ENTITY, loadEntity);
}

export function *updateEntityDefault() {
    yield takeLatest(UPDATE_ENTITY, updateEntity);
    yield takeLatest(PATCH_ENTITY, patchEntity);
}

export function *deleteEntityDefault() {
    yield takeLatest(DELETE_ENTITY, deleteEntity);
}

export function *deleteFileDefault() {
    yield takeEvery(REQUEST_DELETE_FILE, deleteFile);
}

export function *uploadFileDefault() {
    yield takeLatest(FILE_UPLOAD, fileUpload);
}

export function *generalRequestDefault() {
    yield takeEvery(GENERAL_REQUEST, generalRequest);
}