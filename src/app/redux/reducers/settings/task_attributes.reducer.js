import {TASKATTRIBUTES_RECEIVED, TASKATTRIBUTE_RECEIVED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};


export default function taskAttributes(state = defaultState, action) {
    switch (action.type) {
        case TASKATTRIBUTES_RECEIVED:
            return action.response;
        case TASKATTRIBUTE_RECEIVED:
            return {
                ...state,
                'data': [...state.data, action.data.data]
            };
        default:
            return state;
    }
}