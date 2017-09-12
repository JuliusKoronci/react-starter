import {IS_DIRTY} from '../../constants';

const defaultState = {
    'isDirty':false
};

export default function system(state=defaultState, action) {
    switch (action.type) {
        case IS_DIRTY:
            return{
                'isDirty':action.data
            };
        default:
            return state;
    }
}