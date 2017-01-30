import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_COMPANIES, COMPANY_POST_NEW} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {companiesReceived, companyCreated} from '../actions/settings.action';
import {loadCompanies as getCompanies, createNewCompany} from '../../../api/companies/companies.api';
import {entityCreated} from '../../services/general';
import {paths} from '../../../config/router';

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

function *postCompany(action) {
    yield put(startAjax());
    try {
        const data = yield call(createNewCompany, action.data);
        const toast='Company '+ action.data.title +' created';
        const redirectTo=paths.companies;
        entityCreated(toast,redirectTo);
        // yield put(companyCreated(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    console.log('end ajax');
    yield put(endAjax());
}


export function *loadCompaniesDefault() {
    yield takeLatest(REQUEST_COMPANIES, loadCompanies);
}

export function *postNewCompany() {
    yield takeLatest(COMPANY_POST_NEW, postCompany);
}