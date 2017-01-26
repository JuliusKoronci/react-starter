import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_COMPANYATTRIBUTES} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {companyAttributesReceived} from '../actions/settings.action';
import {loadCompanyAttributes as getCompanyAttributes} from '../../../api/company_attributes/company_attributes.api.js';

function *loadCompanyAttributes(action) {
    yield put(startAjax());
    try {
        const data = yield call(getCompanyAttributes, action.url);
        yield put(companyAttributesReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadCompanyAttributesDefault() {
    yield takeLatest(REQUEST_COMPANYATTRIBUTES, loadCompanyAttributes);

}