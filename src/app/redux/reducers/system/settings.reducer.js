import {TOGGLE_SIDEBAR} from '../../constants';

const defaultState = {
    'sidebarIsMinified':false
};

export default function sidebar(state=defaultState, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return{
                'sidebarIsMinified':action.data
            };
        default:
            return state;
    }
}