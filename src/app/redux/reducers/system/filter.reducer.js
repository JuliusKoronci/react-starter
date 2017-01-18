import {FILTERS_RECEIVED} from '../../constants';

export default function tasks(state = [], action) {
    switch (action.type) {
        case FILTERS_RECEIVED:
            return action.data;
        default:
            return state;
    }
}