import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_ENTITY, PATCH_ENTITY, PUT_ENTITY, CREATE_ENTITY, UPDATE_ENTITY} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {companyReceived} from '../actions/settings.action';
import {defaultGET, defaultPUT, defaultPATCH, defaultRequest} from '../../../api/api';
import {entityUpdated, entityCreated} from '../../services/general';
import * as urls from '../../../api/urls';
import {paths} from '../../../config/router';


function configResolver(entityType,id){
    switch(entityType) {
        case 'company':
            return {
                urlId:urls.COMPANIES_LIST + '/' +id,
                url:urls.COMPANIES_LIST,
                afterAction:companyReceived,
                redirectAfterCreation:paths.companies
            };
        default:
            return '';
    }
}


function *loadEntity(action) {
    yield put(startAjax());
    try {
        let config = configResolver(action.entityType, action.id);
        const data = yield call(defaultGET, config.urlId);
        entityUpdated('Entity loaded successfully');
        yield put(config.afterAction(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}

function *updateEntity(action) {
    yield put(startAjax());
    try {
        //FIX, api hadze 500 - Attempted to call an undefined method named "setid" of class "API\CoreBundle\Entity\Company"
        delete action.values.id;
        //FIX
        let config = configResolver(action.entityType, action.id);
        // const data = yield call(defaultRequest, config.url, 'PUT', action.values);
        const data = yield call(defaultPUT, config.urlId, action.values);
        entityUpdated('Updated successfully');
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


function *createEntity(action) {
    yield put(startAjax());
    try {
        let config = configResolver(action.entityType);
        const data = yield call(defaultRequest, config.url, 'POST', action.values);
        entityCreated('Created successfully', config.redirectAfterCreation );
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *createEntityDefault() {
    yield takeLatest(CREATE_ENTITY, createEntity);
}

// export function *patchEntityDefault() {
//     yield takeLatest(PATCH_ENTITY, patchEntity);
// }
// export function *putEntityDefault() {
//     yield takeLatest(PUT_ENTITY, patchEntity);
// }

export function *loadEntityDefault() {
    yield takeLatest(REQUEST_ENTITY, loadEntity);
}

export function *updateEntityDefault() {
    yield takeLatest(UPDATE_ENTITY, updateEntity);
}

