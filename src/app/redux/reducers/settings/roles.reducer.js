import {ROLES_RECEIVED, ROLE_RECEIVED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};


export default function roles(state = defaultState, action) {
    switch (action.type) {
        case ROLES_RECEIVED:
            return action.response;
        case ROLE_RECEIVED:

            // action.data.data.acl=eval(action.data.data.acl);
            //let data=action.data.data.acl;
            //console.log(data);

            return {...state,
                'data': [...state.data, action.data.data]};
        default:
            return state;
    }
}