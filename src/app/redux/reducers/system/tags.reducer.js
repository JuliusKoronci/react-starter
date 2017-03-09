import {TAGS_RECEIVED,TAG_RECEIVED,TAG_CREATED} from '../../constants';


const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};

export default function tags(state = defaultState, action) {
    switch (action.type) {
        case TAGS_RECEIVED:
            return action.data;
        case TAG_RECEIVED:
            return {
                ...state,
                'data': state.data.map((tag) => {
                    if (tag.id === action.data.data.id) {
                        return Object.assign({}, tag, action.data.data);
                    }
                    return tag;
                })
            };
        case TAG_CREATED:
            return {
                ...state,
                'data':[...state.data, action.data.data]
            };
        default:
            return state;
    }
}