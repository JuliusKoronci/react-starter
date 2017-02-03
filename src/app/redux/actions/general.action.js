import * as constants from '../constants';


export function loadEntityById(id, config) {
    return {
        type: constants.REQUEST_ENTITY,
        id,
        config
    }
}
export function loadEntityList(config) {
    return {
        type: constants.REQUEST_ENTITY,
        config
    }
}

export function createEntity(values, config) {
    return {
        type: constants.CREATE_ENTITY,
        config
    }
}

export function patchEntity(id, values, config) {
    return {
        type: constants.PATCH_ENTITY,
        id,
        config
    }
}

export function putEntity(id, values, config) {
    return {
        type: constants.PUT_ENTITY,
        id,
        values,
        config
    }
}

export function updateEntity(id, values, config) {
    return {
        type: constants.UPDATE_ENTITY,
        id,
        values,
        config
    }
}

export function deleteEntity(id, config) {
    return {
        type: constants.DELETE_ENTITY,
        id,
        config
    }
}