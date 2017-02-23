import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../app/components/App';
import Login from '../app/components/Login/Login';
import Logout from '../app/components/Login/Logout';
import Main from '../app/components/Main/Main';
import Dashboard from '../app/components/Main/Dashboard/Dashboard';
import NotFoundPage from '../app/components/Main/NotFoundPage';
import Profile from '../app/components/Main/Users/Profile';
import Settings from '../app/components/Main/Settings/Settings';
import AutomatedTasks from '../app/components/Main/Settings/AutomatedTasks/AutomatedTasks';
import AutomatedTask from '../app/components/Main/Settings/AutomatedTasks/AutomatedTask';
import Companies from '../app/components/Main/Settings/Companies/Companies';
import Company from '../app/components/Main/Settings/Companies/Company';
import CompaniesCustomFields from '../app/components/Main/Settings/CompanyAttributes/CompanyAttributes';
import CompaniesCustomField from '../app/components/Main/Settings/CompanyAttributes/CompanyAttribute';
import Imaps from '../app/components/Main/Settings/Imaps/Imaps';
import Imap from '../app/components/Main/Settings/Imaps/Imap';
import ProjectSharedFilters from '../app/components/Main/Settings/ProjectSharedFilters/ProjectSharedFilters';
import ProjectSharedFilter from '../app/components/Main/Settings/ProjectSharedFilters/ProjectSharedFilter';
import Roles from '../app/components/Main/Settings/Roles/Roles';
import Role from '../app/components/Main/Settings/Roles/Role';
import SharedFilters from '../app/components/Main/Settings/SharedFilters/SharedFilters';
import SharedFilter from '../app/components/Main/Settings/SharedFilters/SharedFilter';
import Smtps from '../app/components/Main/Settings/Smtps/Smtps';
import Smtp from '../app/components/Main/Settings/Smtps/Smtp';
import Statuses from '../app/components/Main/Settings/Statuses/Statuses';
import Status from '../app/components/Main/Settings/Statuses/Status';
import TaskCustomFields from '../app/components/Main/Settings/TaskAttributes/TaskAttributes';
import TaskCustomField from '../app/components/Main/Settings/TaskAttributes/TaskCustomField';
import Trigers from '../app/components/Main/Settings/Trigers/Trigers';
import Triger from '../app/components/Main/Settings/Trigers/Triger';
import Units from '../app/components/Main/Settings/Units/Units';
import Unit from '../app/components/Main/Settings/Units/Unit';
import Users from '../app/components/Main/Settings/Users/Users';
import User from '../app/components/Main/Settings/Users/User';
import UserCustomFields from '../app/components/Main/Settings/UserCustomFields/UserAttributes';
import UserCustomField from '../app/components/Main/Settings/UserCustomFields/UserCustomField';
import ReportsCompanies from '../app/components/Main/Reports/Companies/ReportsCompanies';
import ReportCompany from '../app/components/Main/Reports/Companies/ReportCompany';
import ReportsUsers from '../app/components/Main/Reports/Users/ReportsUsers';
import ReportUser from '../app/components/Main/Reports/Users/ReportUser';
import ReportsCustom from '../app/components/Main/Reports/Custom/ReportsCustom';
import Task from '../app/components/Main/Task/Task';


export const paths = {
    'login': '/login',
    'logout': '/logout',
    'task_list': '/tasks',
    'task_show': '/tasks/:taskId',
    'profile':'/profile',
    'settings':'/settings/default',
    'automated_tasks':'/settings/automated-tasks',
    'automated_tasks_add':'/settings/automated-tasks/add',
    'companies':'/settings/companies',
    'companies_add':'/settings/companies/add',
    'companies_edit':'/settings/companies/:companyId',

    'companies_attributes_add':'/settings/companies-attributes/add',
    'companies_attributes_edit':'/settings/companies-attributes/:companyAttributeId',
    'companies_attributes':'/settings/companies-attributes',

    'email_notifications_add':'/settings/email-notifications/add',
    'email_notifications':'/settings/email-notifications',
    'imaps_add':'/settings/imaps/add',
    'imaps_edit':'/settings/imaps/:imapId',
    'imaps':'/settings/imaps',
    'project_shared_filters_add':'/settings/project-shared-filters/add',
    'project_shared_filters':'/settings/project-shared-filters',
    'roles_add':'/settings/roles/add',
    'roles':'/settings/roles',
    'shared_filters_add':'/settings/shared-filters/add',
    'shared_filters':'/settings/shared-filters',
    'smtps_add':'/settings/smtps/add',
    'smtps':'/settings/smtps',
    'statuses_add':'/settings/statuses/add',
    'statuses':'/settings/statuses',
    'task_custom_fields_add':'/settings/task-custom-fields/add',
    'task_custom_fields':'/settings/task-custom-fields',
    'triggers_add':'/settings/trigers/add',
    'triggers':'/settings/trigers',
    'units_add':'/settings/units/add',
    'units':'/settings/units',
    'users_add':'/settings/users/add',
    'users':'/settings/users',
    'user_custom_fields_add':'/settings/user-custom-fields/add',
    'user_custom_fields':'/settings/user-custom-fields',
    'reports_companies':'/reports/companies',
    'report_company':'/reports/company',
    'reports_users':'/reports/users',
    'report_user':'/reports/user',
    'reports_custom':'/reports/custom',
    'filters':'/dashboard/:filterId',


};

// alert(generateRoute('task_show',{taskId:10}));

/**
 * json params {taskId: ''}
 */
export function generateRoute(name, params){
    let path = paths[name];
    if(params){
    for(let i in params){
        const replace = ':' + i;
        path = path.replace(replace, params[i]);
    }}
    return path;
}

export default (
    <Route component={App}>
        <Route path={paths.login} component={Login}/>
        <Route path={paths.logout} component={Logout}/>
        <Route path="/" component={Main}>
            <IndexRoute component={Dashboard}/>
            <Route path={paths.filters} component={Dashboard}/>
            <Route path={paths.task_list} component={Task}/>
            <Route path={paths.task_show} component={Task}/>
            <Route path={paths.profile} component={Profile}/>
            <Route name="settings" path={paths.settings} component={Settings}/>
            <Route name="automated-tasks" path={paths.automated_tasks_add} component={AutomatedTask}/>
            <Route name="automated-tasks" path={paths.automated_tasks} component={AutomatedTasks}/>

            <Route name="company" path={paths.companies_add} component={Company}/>
            <Route name="company" path={paths.companies_edit} component={Company}/>
            <Route name="companies" path={paths.companies} component={Companies}/>

            <Route name="companies-custom-field" path={paths.companies_attributes_add}  component={CompaniesCustomField}/>
            <Route name="companies-custom-field" path={paths.companies_attributes_edit}  component={CompaniesCustomField}/>
            <Route name="companies-custom-fields" path={paths.companies_attributes} component={CompaniesCustomFields}/>

            <Route name="imap" path={paths.imaps_add} component={Imap}/>
            <Route name="imap" path={paths.imaps_edit} component={Imap}/>
            <Route name="imaps" path={paths.imaps} component={Imaps}/>

            <Route name="project-shared-filter" path={paths.project_shared_filters_add} component={ProjectSharedFilter}/>
            <Route name="project-shared-filters" path={paths.project_shared_filters} component={ProjectSharedFilters}/>

            <Route name="role" path={paths.roles_add} component={Role}/>
            <Route name="roles" path={paths.roles} component={Roles}/>

            <Route name="shared-filter" path={paths.shared_filters_add} component={SharedFilter}/>
            <Route name="shared-filters" path={paths.shared_filters} component={SharedFilters}/>

            <Route name="smtp" path={paths.smtps_add} component={Smtp}/>
            <Route name="smtps" path={paths.smtps} component={Smtps}/>

            <Route name="status" path={paths.statuses_add} component={Status}/>
            <Route name="statuses" path={paths.statuses} component={Statuses}/>

            <Route name="task-custom-field" path={paths.task_custom_fields_add} component={TaskCustomField}/>
            <Route name="task-custom-fields" path={paths.task_custom_fields} component={TaskCustomFields}/>

            <Route name="triger" path={paths.triggers_add} component={Triger}/>
            <Route name="trigers" path={paths.triggers} component={Trigers}/>

            <Route name="unit" path={paths.units_add} component={Unit}/>
            <Route name="units" path={paths.units} component={Units}/>

            <Route name="user" path={paths.users_add} component={User}/>
            <Route name="users" path={paths.users} component={Users}/>

            <Route name="user-custom-field" path={paths.user_custom_fields_add} component={UserCustomField}/>
            <Route name="user-custom-fields" path={paths.user_custom_fields} component={UserCustomFields}/>

            <Route name="reports-companies" path={paths.reports_companies} component={ReportsCompanies}/>
            <Route name="report-company" path={paths.report_company} component={ReportCompany}/>

            <Route name="reports-users" path={paths.reports_users} component={ReportsUsers}/>
            <Route name="report-user" path={paths.report_user} component={ReportUser}/>

            <Route name="reports-custom" path={paths.reports_custom} component={ReportsCustom}/>

            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Route>
);