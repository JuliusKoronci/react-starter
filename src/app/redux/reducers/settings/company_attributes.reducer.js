import {COMPANYATTRIBUTES_RECEIVED,COMPANYATTRIBUTE_RECEIVED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};


export default function companyAttributes(state = defaultState, action) {
    switch (action.type) {
        case COMPANYATTRIBUTES_RECEIVED:
            return action.response;
        case COMPANYATTRIBUTE_RECEIVED:
            return {
                ...state,
                'data': [...state.data, action.data.data]
            };
        default:
            return state;
    }
}