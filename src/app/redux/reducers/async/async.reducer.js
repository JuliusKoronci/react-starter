import {LOADING_START,LOADING_START_RESET, LOADING_END, ASYNC_ERROR, REMOVE_ERROR} from '../../constants';

export default function async(state = {
    'loading': false, 'load_count': 0, 'stop': false, error: {
        status: 0,
        message: ''
    }
}, action) {
    switch (action.type) {

        case LOADING_START:
            const load_count = (state.load_count ? state.load_count : 0);
            return {
                ...state,
                'loading': true,
                'load_count': load_count + 1,
                'stop': load_count >= 1
            };
        case LOADING_START_RESET:
            return {
                ...state,
                'loading': true,
                'load_count': 1,
                'stop': 1
            };
        case LOADING_END:
            const count = (state.load_count - 1 < 1) ? 0 : state.load_count - 1;
            return {
                ...state,
                'loading': count !== 0,
                'load_count': count,
                'stop': count === 0
            };
        case ASYNC_ERROR:
            return {
                ...state,
                error: action.error
            };
        case REMOVE_ERROR:
            if(action.error===state.error.message){
                return {
                    ...state,
                    error:{status:0,message:''}
                }
            }
            return {
                ...state
            };
        default:
            return state;
    }
}