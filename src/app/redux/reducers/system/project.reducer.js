import {PROJECTS_RECEIVED} from '../../constants';

export default function projects(state = [], action) {
    switch (action.type) {
        case PROJECTS_RECEIVED:
            return action.data;
        default:
            return state;
    }
}