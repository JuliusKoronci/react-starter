import {LOADING_START, LOADING_END, ASYNC_ERROR} from '../constants'

export function startAjax() {
    return {
        'type': LOADING_START
    }
}
export function endAjax() {
    return {
        'type': LOADING_END
    }
}

export function asyncError(error) {
    return {
        type: ASYNC_ERROR,
        error
    }
}