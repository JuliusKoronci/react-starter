import {TOGGLE_SIDEBAR} from '../../constants';

const defaultState = {
    'sidebarIsShown':true
};

export default function sidebar(state={}, action) {
    // console.log(state.sidebarIsShown);
    console.log(action);
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            console.log(action.data + ' in reducer');
            return{
                'sidebarIsShown':action.data
            };
        default:
            return state;
    }
}