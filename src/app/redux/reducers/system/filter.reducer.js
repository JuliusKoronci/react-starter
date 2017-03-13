import {FILTERS_RECEIVED,FILTER_RECEIVED} from '../../constants';

export default function filters(state = [], action) {
    switch (action.type) {
        case FILTERS_RECEIVED:
            return action.data;
        case FILTER_RECEIVED:
            //TODO
            // console.log(action)
            let filter=action.data.data;
            let newState = Object.assign({}, state, {filter});
            // console.log('new state: ',newState);
            return state.concat(action.data.data);
        default:
            return state;
    }
}