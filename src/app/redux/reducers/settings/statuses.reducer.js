import {STATUSES_RECEIVED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};


export default function statuses(state = defaultState, action) {
    switch (action.type) {
        case STATUSES_RECEIVED:
            return action.response;
        default:
            return state;
    }
}