import {PROJECTS_RECEIVED, PROJECT_RECEIVED, PROJECT_CREATED,PROJECT_USERS_UPDATED, PROJECT_USER_REMOVED, PROJECT_ACL_UPDATED} from '../../constants';

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
        case PROJECT_USERS_UPDATED:
            return {
                ...state,
                'data': state.data.map((project) => {
                    if (project.id === action.data.data.id) {
                        return Object.assign({}, project, action.data.data);
                    }
                    return project;
                })
            };
        case PROJECT_ACL_UPDATED:

        return {
            ...state,
            'data': state.data.map((project) => {
                if (project.id === action.data.data.id) {
                    return Object.assign({}, project, action.data.data);
                }
                return project;
            })
        };
            // case PROJECT_ACL_UPDATED:
            // return {
            //     ...state,
            //     'data': state.data.map((project) => {
            //         if (project.id === action.data.data.id) {
            //             return Object.assign({}, project, action.data.data);
            //         }
            //         return project;
            //     })
            // };
        case PROJECT_USER_REMOVED:
            return {
                ...state,
                'data': state.data.map((project) => {
                    if (project.id === parseInt(action.config.projectId,10)) {
                        let newObj=Object.assign({}, project);
                        newObj.userHasProjects=project.userHasProjects.filter((user)=>user.user.id!==action.config.userId);
                        return newObj;
                        }
                    return project;
                })
            };
        default:
            return state;
    }
}