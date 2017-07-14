import * as constants from '../constants';


export function profileReceived(data) {
    return {
        type: constants.PROFILE_RECEIVED,
        data
    }
}


export function uploadAvatar(data, config) {
    return {
        type: constants.UPLOAD_AVATAR,
        data,
        config
    }
}

export function avatarUploaded(config, data) {
    return {
        type: constants.UPDATE_ENTITY,
        id:config.id,
        values:{image:data.slug},
        config
    }
}

export function resetPassword(id,values,config){
    return {
        type: constants.GENERAL_REQUEST,
        id,
        values,
        config
    }
}
