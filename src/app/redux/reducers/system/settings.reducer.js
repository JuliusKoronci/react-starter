import {TOGGLE_SIDEBAR} from '../../constants';

const defaultState = {
    'sidebarIsMinified':false
};

export default function sidebar(state={}, action) {
    // console.log(state.sidebarIsShown);
    console.log(action);
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            console.log(action.data + ' in reducer');
            return{
                'sidebarIsMinified':action.data
            };
        default:
            return state;
    }
}