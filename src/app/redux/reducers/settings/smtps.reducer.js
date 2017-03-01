import {SMTPS_RECEIVED, SMTP_RECEIVED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};


export default function statuses(state = defaultState, action) {
    switch (action.type) {
        case SMTPS_RECEIVED:
            console.log(action.response);
            return action.response;
        case SMTP_RECEIVED:
            return {...state,
                'data': [...state.data, action.data.data]};
        default:
            return state;
    }
}