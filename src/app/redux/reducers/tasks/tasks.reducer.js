import {TASKS_RECEIVED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};


export default function tasks(state = defaultState, action) {
    switch (action.type) {
        case TASKS_RECEIVED:
            return action.data;
        default:
            return state;
    }
}