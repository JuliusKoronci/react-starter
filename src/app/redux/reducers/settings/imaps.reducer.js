import {IMAPS_RECEIVED, IMAP_RECEIVED, IMAP_DELETED} from '../../constants';

const defaultState = {
    'data': [],
    '_links': {},
    'total': 0,
    'page': 1,
    'numberOfPages': 0,
};


export default function imaps(state = defaultState, action) {
    switch (action.type) {
        case IMAPS_RECEIVED:
            return action.response;
        case IMAP_DELETED:
            // alert('imao deleted reducer '+action.id)
            return {...state,
                'data': state.data.filter(imap=>{return imap.id!==action.id})
            };
        case IMAP_RECEIVED:
            return {...state,
            'data': [...state.data, action.data.data]};
        default:
            return state;
    }
}