import {LOADING_START, LOADING_END} from '../../constants';

export default function async(state = {'loading': false, 'load_count': 0, 'stop': false}, action) {
    switch (action.type) {

        case LOADING_START:
            const load_count=(state.load_count?state.load_count:0);
            return {
                'loading': true,
                'load_count': load_count + 1,
                'stop': load_count >= 1
            };
        case LOADING_END:
            const count = (state.load_count - 1 < 1) ? 0 : state.load_count - 1;
            return {
                'loading': count !== 0,
                'load_count': count,
                'stop': count === 0
            };
        default:
            return state;
    }
}