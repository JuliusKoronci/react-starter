import * as constants from '../constants';


export function projectReceived(data) {
    return {
        type: constants.PROJECT_RECEIVED,
        data
    }
}



