import {
    TASKS_RECEIVED,
    TASK_RECEIVED,
    TASK_UPDATED,
    OPTIONS_RECEIVED,
    AFTER_TASK_ATTACHMENT_DELETED
} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
    'options': {
        'status': [],
        'project': [],
        'requester': [],
        'company': [],
        'tag': [],
        'assigner': [],
        'unit': [],
    },
    'task': {}
};


export default function tasks(state = defaultState, action) {
    switch (action.type) {
        case TASKS_RECEIVED:
            return {...state, ...action.data};
        case TASK_RECEIVED:
            return {
                ...state,
                'task': action.data
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
        case OPTIONS_RECEIVED:
            return {
                ...state,
                'options': action.data
            };


        case AFTER_TASK_ATTACHMENT_DELETED:
            return {
                ...state,
                'task': {
                    ...state.task,
                    data: {
                        ...state.task.data,
                        taskHasAttachments: state.task.data.taskHasAttachments.filter((att) => {
                            if (att.slug === action.deletedAttachmentSlug) {
                                return false;
                            }
                            return true;
                        })
                    }
                }
            };

        default:
            return state;
    }
}