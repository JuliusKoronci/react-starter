import {IMAPS_RECEIVED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};


export default function imaps(state = defaultState, action) {
    switch (action.type) {
        case IMAPS_RECEIVED:
            return action.response;
        default:
            return state;
    }
}