import {TAGS_RECEIVED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};

export default function tags(state = defaultState, action) {
    switch (action.type) {
        case TAGS_RECEIVED:
            return action.data;
        default:
            return state;
    }
}