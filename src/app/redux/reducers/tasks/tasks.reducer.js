// @flow
import {
    TASKS_RECEIVED,
    TASK_RECEIVED,
    TASK_UPDATED,
    OPTIONS_RECEIVED,
    AFTER_TASK_ATTACHMENT_DELETED,
    AFTER_TASK_ATTACHMENT_UPLOADED
} from '../../constants';

const defaultState: {data: Array<Object>, _links: Object}= {
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


export default function tasks(state: Object = defaultState, action: Object): Object {
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
                            return att.slug !== action.deletedAttachmentSlug;
                        })
                    }
                }
            };

        case AFTER_TASK_ATTACHMENT_UPLOADED:
            return {
                ...state,
                'task': {
                    ...state.task,
                    data: {
                        ...state.task.data,
                        taskHasAttachments: action.data.taskHasAttachments
                    }
                }
            };

        default:
            return state;
    }
}