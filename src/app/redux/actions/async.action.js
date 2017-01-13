import {LOADING_START, LOADING_END} from '../constants'

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