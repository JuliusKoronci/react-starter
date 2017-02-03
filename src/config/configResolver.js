import {paths} from './router';
import * as urls from '../api/urls';
import {companyReceived, statusesReceived} from '../app/redux/actions/settings.action';
import {projectsReceived} from '../app/redux/actions/system.actions';
import {taskReceived} from '../app/redux/actions/tasks.action';

class configResolver {
    static getCompanyConfig = (id) => {
        return {
            url: id ? urls.COMPANIES_LIST + '/' + id : urls.COMPANIES_LIST,
            urlList: urls.COMPANIES_LIST,
            afterEntityReceivedAction: companyReceived,
            redirectAfterCreation: paths.companies
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
}

export default configResolver;