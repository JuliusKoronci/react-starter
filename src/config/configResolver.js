import {paths} from './router';
import * as urls from '../api/urls';
import {companyReceived, statusesReceived, companyAttributeReceived} from '../app/redux/actions/settings.action';
import {projectsReceived} from '../app/redux/actions/system.actions';
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

    static loadStatusList() {
        return {
            url: urls.STATUSES_LIST,
            afterEntityReceivedAction: statusesReceived,
        }
    }

    static loadProjectList() {
        return {
            url: urls.PROJECT_LIST,
            afterEntityReceivedAction: projectsReceived,
        }
    }

    static updateProject(projectId, taskId) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/project/' + projectId,
            afterEntityReceivedAction: taskReceived,
        }
    }

    static assignUser(userId, taskId, statusId) {
        return {
            url: urls.TASK_LIST_QUICK + '/' + taskId,
            afterEntityReceivedAction: taskReceived,
            values: {
                'assigned': [
                    {
                        'userId': userId,
                        'statusId': statusId
                    }
                ]
            }
        }
    }
}

export default configResolver;