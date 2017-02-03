import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_PROJECTSHAREDFILTERS} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {projectSharedFiltersReceived} from '../actions/settings.action';
import {loadProjectSharedFilters as getProjectSharedFilters} from '../../../api/project_shared_filters/project_shared_filters.api';

function *loadProjectSharedFilters(action) {
    yield put(startAjax());
    try {
        const data = yield call(getProjectSharedFilters, action.url);
        yield put(projectSharedFiltersReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadProjectSharedFiltersDefault() {
    yield takeLatest(REQUEST_PROJECTSHAREDFILTERS, loadProjectSharedFilters);

}