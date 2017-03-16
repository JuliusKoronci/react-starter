import {USERS_ALL_RECEIVED} from '../../constants';


export default function users(state = [], action) {
    switch (action.type) {
        case USERS_ALL_RECEIVED:
            return action.data;
        default:
            return state;
    }
}