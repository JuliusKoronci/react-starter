import {LOADING_START, LOADING_END} from '../../constants';

export default function async(state = {'loading': false, count: 0, stop: false}, action) {
    switch (action.type) {
        case LOADING_START:
            return {
                'loading': true,
                'count': state.count + 1,
                'stop': state.count >= 1
            };
        case LOADING_END:
            const count = (state.count - 1 < 1) ? 0 : state.count - 1;
            return {
                'loading': count !== 0,
                'count': count,
                'stop': count === 0
            };
        default:
            return state;
    }
}