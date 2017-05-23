import {PROJECTS_WHERE_USER_CAN_ADD_TASK_RECEIVED} from '../../constants';


const defaultState = {
    'projectsWhereUserCanAddTask':[]
};

export default function userOptions(state = defaultState, action) {
    switch (action.type) {
        case PROJECTS_WHERE_USER_CAN_ADD_TASK_RECEIVED:
            return {
                ...state,
                'projectsWhereUserCanAddTask': action.data
            };
        default:
            return state;
    }
}