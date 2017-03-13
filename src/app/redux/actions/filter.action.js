import * as constants from '../constants';


export function filterReceived(data) {
    return {
        type: constants.FILTER_RECEIVED,
        data
    }
}

    export function filterOptionsReceived(data) {
        return {
            type: constants.FILTER_OPTIONS_RECEIVED,
            data
        }

}




