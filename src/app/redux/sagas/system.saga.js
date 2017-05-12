import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_PROJECTS,REQUEST_TAGS,PROJECT_ASSIGNERS_REQUEST} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {projectsReceived, tagsReceived,projectAssignersReceived} from '../actions/system.actions';
import {defaultGET} from '../../../api/api';

import {PROJECT_LIST,TAG_LIST} from '../../../api/urls';
function *loadProjects() {
    const url=PROJECT_LIST;
    yield put(startAjax());
    try {
        const data = yield call(defaultGET, url);
        yield put(projectsReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}

function *loadTags() {
    const url=TAG_LIST;
    yield put(startAjax());
    try {
        const data = yield call(defaultGET, url);
        yield put(tagsReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


function *projectAssigners(action) {
    const url=action.config.url;
    yield put(startAjax());
    try {
        const data = yield call(defaultGET, url);
        yield put(projectAssignersReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadProjectsDefault() {
    yield takeLatest(REQUEST_PROJECTS, loadProjects);
    yield takeLatest(PROJECT_ASSIGNERS_REQUEST, projectAssigners);

}
export function *loadTagsDefault() {
    yield takeLatest(REQUEST_TAGS, loadTags);

}
