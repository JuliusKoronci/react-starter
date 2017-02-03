import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_SHAREDFILTERS} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {sharedFiltersReceived} from '../actions/settings.action';
import {loadSharedFilters as getSharedFilters} from '../../../api/shared_filters/shared_filters.api';

function *loadSharedFilters(action) {
    yield put(startAjax());
    try {
        const data = yield call(getSharedFilters, action.url);
        yield put(sharedFiltersReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadSharedFiltersDefault() {
    yield takeLatest(REQUEST_SHAREDFILTERS, loadSharedFilters);

}