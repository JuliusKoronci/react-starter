import {PROFILE_RECEIVED} from '../../constants';

const defaultState = {
};


export default function profile(state = defaultState, action) {
    switch (action.type) {
        case PROFILE_RECEIVED:
            return action.data;
        default:
            return state;
    }
}