import {COMPANIES_RECEIVED, COMPANY_CREATED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};


export default function companies(state = defaultState, action) {
    switch (action.type) {
        case COMPANIES_RECEIVED:
            return action.response;
        // case COMPANY_CREATED:
        //     const newState=defaultState;
        //     newState.data.push(action.response);
        //     return newState;
        default:
            return state;
    }
}
