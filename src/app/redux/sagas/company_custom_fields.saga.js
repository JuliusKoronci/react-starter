import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_COMPANIESCUSTOMFIELDS} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {companiesCustomFieldsReceived} from '../actions/settings.action';
import {loadCompaniesCustomFields as getCompaniesCustomFields} from '../../../api/users/users.api';

function *loadCompaniesCustomFields(action) {
    yield put(startAjax());
    try {
        const data = yield call(getCompaniesCustomFields, action.url);
        yield put(companiesCustomFieldsReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadCompaniesCustomFieldsDefault() {
    yield takeLatest(REQUEST_COMPANIESCUSTOMFIELDS, loadCompaniesCustomFields);

}