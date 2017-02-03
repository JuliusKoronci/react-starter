import {PROJECTS_RECEIVED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};

export default function projects(state = defaultState, action) {
    switch (action.type) {
        case PROJECTS_RECEIVED:
            return action.data;
        default:
            return state;
    }
}