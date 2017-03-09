import {TAGS_RECEIVED,TAG_RECEIVED} from '../../constants';


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
                    if (tag.id === action.tagId) {
                        return Object.assign({}, tag, action.data);
                    }
                    return tag;
                })
            };
        default:
            return state;
    }
}