import {paths} from './router';
import * as urls from '../api/urls';
import {companyReceived, companyAttributeReceived} from '../app/redux/actions/settings.action';
import {optionsReceived} from '../app/redux/actions/system.actions';
import {taskReceived} from '../app/redux/actions/tasks.action';

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
            allowedFormFields: ['city', 'country', 'dic', 'ic_dph', 'ico', 'street', 'title', 'zip']
        }
    };

    static deleteTaskAttachment(taskId, slug) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/attachment/' + slug,
            afterFileDeletedAction: taskReceived,
        }
    };

    static getDownloadFileConfig = () => {
        return {
            url:urls.LOAD_ATTACHMENT
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
}

export default configResolver;