import {paths} from './router';
import * as urls from '../api/urls';
import {companyReceived, companyAttributeReceived, statusReceived, userAttributeReceived, taskAttributeReceived, unitReceived} from '../app/redux/actions/settings.action';
import {optionsReceived} from '../app/redux/actions/system.actions';
import {taskReceived, taskAttachmentDeleted} from '../app/redux/actions/tasks.action';
import {profileReceived, avatarUploaded} from '../app/redux/actions/users.action';

class configResolver {
    static getCompanyConfig = (id) => {
        return {
            url: id ? urls.COMPANIES_LIST + '/' + id : urls.COMPANIES_LIST,
            urlList: urls.COMPANIES_LIST,
            afterEntityReceivedAction: companyReceived,
            redirectAfterCreation: paths.companies,
            allowedFormFields: ['city', 'country', 'dic', 'ic_dph', 'ico', 'street', 'title', 'zip']
        }
    };

    static getCompanyAttributesConfig = (id) => {
        return {
            url: id ? urls.COMPANYATTRIBUTES_LIST + '/' + id : urls.COMPANYATTRIBUTES_LIST,
            urlList: urls.COMPANYATTRIBUTES_LIST,
            afterEntityReceivedAction: companyAttributeReceived,
            redirectAfterCreation: paths.companies_attributes,
            allowedFormFields: ['title', 'description','options','type'],
            customValuesEnabledOn:['multi_select','checkbox','simple_select']
        }
    };

    static getTaskAttributesConfig = (id) => {
        return {
            url: id ? urls.TASKATTRIBUTES_LIST + '/' + id : urls.TASKATTRIBUTES_LIST,
            urlList: urls.TASKATTRIBUTES_LIST,
            afterEntityReceivedAction: taskAttributeReceived,
            redirectAfterCreation: paths.task_attributes,
            allowedFormFields: ['title','options','type','is_active'],
            customValuesEnabledOn:['multi_select','checkbox','simple_select']
        }
    };

    static getUserAttributesConfig = (id) => {
        return {
            url: id ? urls.USERATTRIBUTES_LIST + '/' + id : urls.USERATTRIBUTES_LIST,
            urlList: urls.USERATTRIBUTES_LIST,
            afterEntityReceivedAction: userAttributeReceived,
            redirectAfterCreation: paths.user_attributes,
            allowedFormFields: ['title', 'description','options','type'],
            customValuesEnabledOn:['multi_select','checkbox','simple_select']
        }
    };

    static getStatusConfig = (id) => {
        return {
            url: id ? urls.STATUSES_LIST + '/' + id : urls.STATUSES_LIST,
            urlList: urls.STATUSES_LIST,
            afterEntityReceivedAction: statusReceived,
            redirectAfterCreation: paths.statuses,
            allowedFormFields: ['title', 'description', 'color']
        }
    };

    static getUnitConfig = (id) => {
        return {
            url: id ? urls.UNITS_LIST + '/' + id : urls.UNITS_LIST,
            urlList: urls.UNITS_LIST,
            afterEntityReceivedAction: unitReceived,
            redirectAfterCreation: paths.units,
            allowedFormFields: ['title', 'shortcut','is_active']
        }
    };

    static getProfileConfig = (id) => {
        return {
            id:id?id:null,
            url: id ? urls.USERS_LIST + '/' + id : urls.USERS_LIST,
            urlList: urls.USERS_LIST,
            uploadUrl: urls.FILE_UPLOAD,
            // allowedFormFields: ['email','detailData.google','detail_data.google'],
            remapValues:{'email':'email','username':'username','detailData.function':'detail_data[function]',
            'detailData.name':'detail_data[name]','detailData.surname':'detail_data[surname]','detailData.signature':'detail_data[signature]',
            'detailData.tel':'detail_data[tel]','detailData.facebook':'detail_data[facebook]','detailData.twitter':'detail_data[twitter]',
            'detailData.linkdin':'detail_data[linkdin]','detailData.google':'detail_data[google]','language':'language'},
            afterEntityReceivedAction: profileReceived
        }
    };

    static getProfileAvatarConfig = (id) => {
        return {
            id:id?id:null,
            url: id ? urls.USERS_LIST + '/' + id : urls.USERS_LIST,
            uploadUrl: urls.FILE_UPLOAD,
            remapValues:{'image':'image'},
        }
    };


    static deleteTaskAttachment(taskId, slug) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/attachment/' + slug,
            afterFileDeletedAction: taskAttachmentDeleted,
            afterFileDeletedActionParams:{taskId,slug}
        }
    };

    static getDownloadFileConfig = () => {
        return {
            url: urls.LOAD_ATTACHMENT
        }
    };

    static getAssignUserConfig(taskId, userId) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/assign-user/' + userId
        }
    };

    static changeStatusConfig(taskId, userId, statusId) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/assign-user/' + userId + '/status/' + statusId
        }
    };

    static loadOptionList(taskId) {
        return {
            url: urls.OPTION_LIST + '/' + taskId,
            afterEntityReceivedAction: optionsReceived,
        }
    }

    static updateProject(projectId, taskId) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/project/' + projectId,
            afterEntityReceivedAction: taskReceived,
        }
    }

    static assignUser(values, taskId, statusId) {
        return {
            url: urls.TASK_LIST_QUICK + '/' + taskId,
            afterEntityReceivedAction: taskReceived,
            values: {
                'assigned': values.map((val) => {
                    return {
                        userId: val.value,
                        statusId
                    }
                })
            }
        }
    }

    static addTags(values, taskId) {
        return {
            url: urls.TASK_LIST_QUICK + '/' + taskId,
            afterEntityReceivedAction: taskReceived,
            values: {
                'tag': values.map((val) => {
                    return {
                        title: val.label,
                    }
                })
            }
        }
    }

    static updateRequester(userId, taskId) {
        return {
            url: urls.TASK_LIST_QUICK + '/' + taskId,
            afterEntityReceivedAction: taskReceived,
            values: {
                'requester': userId
            }
        }
    }

    static updateCompany(companyId, taskId) {
        return {
            url: urls.TASK_LIST_QUICK + '/' + taskId,
            afterEntityReceivedAction: taskReceived,
            values: {
                'company': companyId
            }
        }
    }

    static addMaterial(data, taskId) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/invoiceable-items/unit/' + data.unit.value,
            afterEntityReceivedAction: taskReceived,
            values: {
                'title': data.name.value,
                'amount': data.quantity.value,
                'unit_price': data.price.value
            }
        }
    }
}

export default configResolver;