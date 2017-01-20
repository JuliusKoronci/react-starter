import {addToStorage} from '../../services/storage';
/**
 * Middleware for interacting with browser storage
 */
export default store => next => action => {
    if (action.storage && action.data !== undefined) {
        addToStorage(action.storage, action.data);
    }
    return next(action);
};