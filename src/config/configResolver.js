import {paths} from './router';
import * as urls from '../api/urls';
import {companyReceived} from '../app/redux/actions/settings.action';

class configResolver {
    static getCompanyConfig = (id) => {
        return {
            url: id ? urls.COMPANIES_LIST + '/' + id : urls.COMPANIES_LIST,
            urlList:urls.COMPANIES_LIST,
            afterEntityReceivedAction: companyReceived,
            redirectAfterCreation: paths.companies
        }
    }
}

export default configResolver;