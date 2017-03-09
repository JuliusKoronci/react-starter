import * as constants from '../constants';


export function tagReceived(data) {
    return {
        type: constants.TAG_RECEIVED,
        data
    }
}



