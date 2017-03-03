import {fork} from 'redux-saga/effects';
import {loadAuth} from '../app/redux/sagas/auth.saga';

import {loadTasks, loadTasksFromUrl} from '../app/redux/sagas/tasks.saga';
import {loadFilters} from '../app/redux/sagas/filter.saga';
import {loadUsersDefault, uploadAvatarDefault} from '../app/redux/sagas/users.saga';
import {loadCompaniesDefault, postNewCompany} from '../app/redux/sagas/companies.saga';
import {loadStatusesDefault} from '../app/redux/sagas/statuses.saga';
import {loadRolesDefault} from '../app/redux/sagas/roles.saga';
import {loadCompanyAttributesDefault} from '../app/redux/sagas/company_attributes.saga.js';
import {loadTaskAttributesDefault} from '../app/redux/sagas/task_attributes.saga.js';
import {loadImapsDefault} from '../app/redux/sagas/imaps.saga.js';
import {loadSmtpsDefault} from '../app/redux/sagas/smtps.saga.js';
import {loadProjectSharedFiltersDefault} from '../app/redux/sagas/project_shared_filters.saga';
import {loadSharedFiltersDefault} from '../app/redux/sagas/shared_filters.saga';
import {loadUnitsDefault} from '../app/redux/sagas/units.saga';
import {loadProjectsDefault,loadTagsDefault} from '../app/redux/sagas/system.saga';
import {loadUserAttributesDefault} from '../app/redux/sagas/user_attributes.saga';
import {loadEntityDefault,createEntityDefault,updateEntityDefault,deleteEntityDefault, downloadFileDefault,deleteFileDefault,uploadFileDefault} from '../app/redux/sagas/general.saga';


export default function* root() {
    yield fork(loadAuth);
    yield fork(loadTasks);
    yield fork(loadTasksFromUrl);
    yield fork(loadFilters);
    yield fork(loadUsersDefault);
    yield fork(uploadAvatarDefault);
    yield fork(loadCompaniesDefault);
    yield fork(postNewCompany);
    yield fork(loadStatusesDefault);
    yield fork(loadRolesDefault);
    yield fork(loadCompanyAttributesDefault);
    yield fork(loadTaskAttributesDefault);
    yield fork(loadUserAttributesDefault);
    yield fork(loadImapsDefault);
    yield fork(loadSmtpsDefault);
    yield fork(loadProjectSharedFiltersDefault);
    yield fork(loadSharedFiltersDefault);
    yield fork(loadUnitsDefault);
    yield fork(loadProjectsDefault);
    yield fork(loadTagsDefault);

    yield fork(downloadFileDefault);
    yield fork(loadEntityDefault);
    yield fork(createEntityDefault);
    yield fork(updateEntityDefault);
    yield fork(deleteEntityDefault);
    yield fork(deleteFileDefault);
    yield fork(uploadFileDefault);

}