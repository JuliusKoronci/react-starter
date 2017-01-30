import {TASKS_RECEIVED, TASK_RECEIVED, TASK_UPDATED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};


export default function tasks(state = defaultState, action) {
    switch (action.type) {
        case TASKS_RECEIVED:
            return action.data;
        case TASK_RECEIVED:
            return {
                ...state,
                'data': [...state.data, action.data.data]
            };
        case TASK_UPDATED:
            return {
                ...state,
                'data': state.data.map((task) => {
                    if (task.id === action.taskId) {
                        return Object.assign({}, task, action.data);
                    }
                    return task;
                })
            };
        default:
            return state;
    }
}