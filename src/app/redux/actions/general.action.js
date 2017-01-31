import * as constants from '../constants';


export function loadEntityById(entityType,id) {
    return {
        type: constants.REQUEST_ENTITY,
        entityType,
        id
    }
}

export function createEntity(entityType, values) {
    return {
        type: constants.CREATE_ENTITY,
        entityType,
        values
    }
}

export function patchEntity(entityType,id, values) {
    return {
        type: constants.PATCH_ENTITY,
        entityType,
        id,
        values
    }
}

export function putEntity(entityType,id, values) {
    return {
        type: constants.PUT_ENTITY,
        entityType,
        id,
        values
    }
}

export function updateEntity(entityType,id, values) {
    return {
        type: constants.UPDATE_ENTITY,
        entityType,
        id,
        values
    }
}