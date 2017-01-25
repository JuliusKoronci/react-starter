import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_COMPANIES} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {companiesReceived} from '../actions/settings.action';
import {loadCompanies as getCompanies} from '../../../api/companies/companies.api';

function *loadCompanies(action) {
    yield put(startAjax());
    try {
        const data = yield call(getCompanies, action.url);
        yield put(companiesReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadCompaniesDefault() {
    yield takeLatest(REQUEST_COMPANIES, loadCompanies);

}