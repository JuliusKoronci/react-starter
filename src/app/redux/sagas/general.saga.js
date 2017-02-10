import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {REQUEST_ENTITY, CREATE_ENTITY, UPDATE_ENTITY, DELETE_ENTITY, PATCH_ENTITY, REQUEST_DOWNLOAD_FILE} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {defaultGET, defaultRequest, defaultPATCH, apiDownloadFile} from '../../../api/api';
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
        yield call(defaultRequest, config.url, 'PUT', action.values, config);
        entityUpdated('Updated successfully');
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}

function *patchEntity(action) {
    yield put(startAjax());
    try {

        let config = action.config;
        const data = yield call(defaultPATCH, config.url, action.values );
        if (config.afterEntityReceivedAction) {
            yield put(config.afterEntityReceivedAction(data));
        }
        entityUpdated('Updated successfully');
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
        entityDeleted('Deleted successfully ' + action.id, config.redirectAfterCreation);
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


function *createEntity(action) {
    yield put(startAjax());
    try {
        let config = action.config;
        yield call(defaultRequest, config.url, 'POST', config);
        entityCreated('Created successfully', config.redirectAfterCreation);
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


function *downloadFile(action) {
    let config = action.config;
    yield put(startAjax());
    try {
        yield call(apiDownloadFile, config.url + '/'+action.slug, action.config);
        entityUpdated('Downloading file');
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


