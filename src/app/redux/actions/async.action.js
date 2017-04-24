import {LOADING_START,LOADING_START_RESET, LOADING_END, ASYNC_ERROR, REMOVE_ERROR} from '../constants'

export function startAjax() {
    return {
        'type': LOADING_START
    }
}
export function startAjaxReset() {
    return {
        'type': LOADING_START_RESET
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

export function removeError(error) {
    return {
        type: REMOVE_ERROR,
        error
    }
}