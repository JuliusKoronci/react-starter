import {paths} from './router';
import * as urls from '../api/urls';
import {companyReceived, statusesReceived} from '../app/redux/actions/settings.action';

class configResolver {
    static getCompanyConfig = (id) => {
        return {
            url: id ? urls.COMPANIES_LIST + '/' + id : urls.COMPANIES_LIST,
            urlList:urls.COMPANIES_LIST,
            afterEntityReceivedAction: companyReceived,
            redirectAfterCreation: paths.companies,
            allowedFormFields:['city','country','dic','ic_dph','ico','street','title','zip']
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

    static loadStatusList(){
        return {
            url: urls.STATUSES_LIST,
            afterEntityReceivedAction: statusesReceived,
        }
    }
}

export default configResolver;