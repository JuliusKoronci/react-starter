import * as constants from '../constants';


export function profileReceived(data) {
    return {
        type: constants.PROFILE_RECEIVED,
        data
    }
}

