import {fork} from 'redux-saga/effects';
import {loadAuth} from '../app/redux/sagas/auth.saga'

export default function* root() {
    yield fork(loadAuth);
}