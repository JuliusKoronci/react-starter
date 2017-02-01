import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_UNITS} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {unitsReceived} from '../actions/settings.action';
import {loadUnits as getUnits} from '../../../api/units/units.api';

function *loadUnits(action) {
    yield put(startAjax());
    try {
        const data = yield call(getUnits, action.url);
        yield put(unitsReceived(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *loadUnitsDefault() {
    yield takeLatest(REQUEST_UNITS, loadUnits);

}