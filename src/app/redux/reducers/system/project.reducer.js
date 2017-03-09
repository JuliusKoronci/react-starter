import {PROJECTS_RECEIVED, PROJECT_RECEIVED, PROJECT_CREATED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};

export default function projects(state = defaultState, action) {
    switch (action.type) {
        case PROJECTS_RECEIVED:
            return action.data;
        case PROJECT_RECEIVED:
            return {
                ...state,
                'data': state.data.map((project) => {
                    if (project.id === action.data.data.id) {
                        console.log(project.id, action.data.data);
                        return Object.assign({}, project, action.data.data);
                    }
                    return project;
                })
            };
        case PROJECT_CREATED:
            return {
                ...state,
                'data':[...state.data, action.data.data]
            };
        default:
            return state;
    }
}