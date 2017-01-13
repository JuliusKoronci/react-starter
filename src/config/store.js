import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import storageMiddleware from '../app/redux/middlewares/storage.middleware'
//import the root reducer
import rootReducer from '../app/redux/reducers/root.reducer';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify here name, actionsBlacklist, actionsCreators and other options
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, storageMiddleware)
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

