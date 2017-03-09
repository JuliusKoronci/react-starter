import * as constants from '../constants';


export function tagReceived(data) {
    return {
        type: constants.TAG_RECEIVED,
        data
    }
}
export function tagCreated(data) {
    return {
        type: constants.TAG_CREATED,
        data
    }
}



