import {FILTER_OPTIONS_RECEIVED} from '../../constants';

const defaultState: {data: Array<Object>, _links: Object} = {
    'data': [],
    'options': {
        'status': [],
        'project': [],
        'requester': [],
        'created':[],
        'company': [],
        'tag': [],
        'assigned': []
    }
};

export default function filters(state = defaultState, action) {
    switch (action.type) {
        case FILTER_OPTIONS_RECEIVED:
            return {
                ...state,
                'options': action.data
            };
        default:
            return state;
    }
}