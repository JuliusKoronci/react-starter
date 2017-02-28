import {USERS_RECEIVED,USER_RECEIVED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};


export default function users(state = defaultState, action) {
    switch (action.type) {
        case USERS_RECEIVED:
            return action.response;
        case USER_RECEIVED:
            return {
                ...state,
                'data': [action.response.data]
            };
        default:
            return state;
    }
}