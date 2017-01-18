import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_FILTERS} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {filtersReceived} from '../actions/system.actions';
import {loadFilters as loadApi} from '../../../api/system/filters.api';

function *defaultFilters() {
    yield put(startAjax());
    try {
        const data = yield call(loadApi);
        yield put(filtersReceived(data.data));
    }catch (e){
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadFilters() {
    yield takeLatest(REQUEST_FILTERS, defaultFilters);
}