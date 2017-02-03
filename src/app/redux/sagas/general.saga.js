import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {REQUEST_ENTITY, CREATE_ENTITY, UPDATE_ENTITY, DELETE_ENTITY, PATCH_ENTITY} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {defaultGET, defaultRequest} from '../../../api/api';
import {entityUpdated, entityCreated, entityDeleted, filterFormValues} from '../../services/general';




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
        let filteredValues=filterFormValues(action.values,config.allowedFormFields);
        yield call(defaultRequest, config.url, 'PUT', filteredValues);
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
        let filteredValues=filterFormValues(action.values,config.allowedFormFields);
        const data = yield call(defaultRequest, config.url, 'PATCH', filteredValues);
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
        let filteredValues=filterFormValues(action.values,config.allowedFormFields);
        yield call(defaultRequest, config.url, 'POST', filteredValues);
        entityCreated('Created successfully', config.redirectAfterCreation);
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
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

