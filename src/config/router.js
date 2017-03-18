import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../app/components/App';
import Login from '../app/components/Login/Login';
import Logout from '../app/components/Login/Logout';
import Main from '../app/components/Main/Main';
import Dashboard from '../app/components/Main/Dashboard/Dashboard';
import TaskList from '../app/components/Main/TaskList/TaskList';
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
import TaskAttributes from '../app/components/Main/Settings/TaskAttributes/TaskAttributes';
import TaskAttribute from '../app/components/Main/Settings/TaskAttributes/TaskAttribute';
import Trigers from '../app/components/Main/Settings/Trigers/Trigers';
import Triger from '../app/components/Main/Settings/Trigers/Triger';
import Units from '../app/components/Main/Settings/Units/Units';
import Unit from '../app/components/Main/Settings/Units/Unit';
import Users from '../app/components/Main/Settings/Users/Users';
import User from '../app/components/Main/Settings/Users/User';
import UserCustomFields from '../app/components/Main/Settings/UserCustomFields/UserAttributes';
import UserCustomField from '../app/components/Main/Settings/UserCustomFields/UserAttribute';
import ReportsCompanies from '../app/components/Main/Reports/Companies/ReportsCompanies';
import ReportCompany from '../app/components/Main/Reports/Companies/ReportCompany';
import ReportsUsers from '../app/components/Main/Reports/Users/ReportsUsers';
import ReportUser from '../app/components/Main/Reports/Users/ReportUser';
import ReportsCustom from '../app/components/Main/Reports/Custom/ReportsCustom';
import Task from '../app/components/Main/Task/Task';
import Filter from '../app/components/Main/Filter/Filter';
import Project from '../app/components/Main/Project/Project';
import Tag from '../app/components/Main/Tag/Tag';



export const paths = {
    'login': '/login',
    'logout': '/logout',
    'task_list': '/tasks',
    'task_show': '/tasks/:taskId',
    'task_new': '/tasks/:taskId/newTask/:newTask',
    'filter': '/filter',
    'filter_edit':'/filter/:filterId',
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
    'roles_edit':'/settings/roles/:roleId',
    'roles':'/settings/roles',
    'shared_filters_add':'/settings/shared-filters/add',
    'shared_filters':'/settings/shared-filters',
    'smtps_add':'/settings/smtps/add',
    'smtps_edit':'/settings/smtps/:smtpId',
    'smtps':'/settings/smtps',
    'statuses_add':'/settings/statuses/add',
    'statuses_edit':'/settings/statuses/:statusId',
    'statuses':'/settings/statuses',
    'task_attributes_add':'/settings/task-attributes/add',
    'task_attributes_edit':'/settings/task-attributes/:taskAttributeId',
    'task_attributes':'/settings/task-attributes',
    'triggers_add':'/settings/trigers/add',
    'triggers':'/settings/trigers',
    'units_add':'/settings/units/add',
    'units_edit':'/settings/units/:unitId',
    'units':'/settings/units',
    'users_add':'/settings/users/add',
    'users_edit':'/settings/users/edit/:userId',
    'users':'/settings/users',
    'user_custom_fields_add':'/settings/user-custom-fields/add',
    'user_custom_fields_edit':'/settings/user-custom-fields/:userAttributeId',
    'user_custom_fields':'/settings/user-custom-fields',
    'reports_companies':'/reports/companies',
    'report_company':'/reports/company',
    'reports_users':'/reports/users',
    'report_user':'/reports/user',
    'reports_custom':'/reports/custom',
    'filters':'/dashboard/:filterId',
    'project_tasks':'/project-tasks/:projectId',
    'tag_tasks':'/tag-tasks/:tagId',
    'project_add':'/project/add',
    'project_edit':'/project/:projectId',
    'tag_add':'/tag/add',
    'tag_edit':'/tag/:tagId'


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
            <Route path={paths.task_new} component={Task}/>
            <Route path={paths.task_show} component={Task}/>
            <Route path={paths.profile} component={Profile}/>
            <Route name="filter" path={paths.filter_edit} component={Filter}/>
            <Route name="filter" path={paths.filter} component={Filter}/>


            <Route path={paths.project_tasks} component={TaskList}/>
            <Route path={paths.tag_tasks} component={TaskList}/>

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
            <Route name="role" path={paths.roles_edit} component={Role}/>
            <Route name="roles" path={paths.roles} component={Roles}/>

            <Route name="shared-filter" path={paths.shared_filters_add} component={SharedFilter}/>
            <Route name="shared-filters" path={paths.shared_filters} component={SharedFilters}/>

            <Route name="smtp" path={paths.smtps_add} component={Smtp}/>
            <Route name="smtp" path={paths.smtps_edit} component={Smtp}/>
            <Route name="smtps" path={paths.smtps} component={Smtps}/>

            <Route name="status" path={paths.statuses_add} component={Status}/>
            <Route name="status" path={paths.statuses_edit} component={Status}/>
            <Route name="statuses" path={paths.statuses} component={Statuses}/>

            <Route name="task-attribute" path={paths.task_attributes_add} component={TaskAttribute}/>
            <Route name="task-attribute" path={paths.task_attributes_edit} component={TaskAttribute}/>
            <Route name="task-attribute" path={paths.task_attributes} component={TaskAttributes}/>

            <Route name="triger" path={paths.triggers_add} component={Triger}/>
            <Route name="trigers" path={paths.triggers} component={Trigers}/>

            <Route name="unit" path={paths.units_add} component={Unit}/>
            <Route name="unit" path={paths.units_edit} component={Unit}/>
            <Route name="units" path={paths.units} component={Units}/>

            <Route name="users" path={paths.users} component={Users}/>
            <Route name="user" path={paths.users_add} component={User}/>
            <Route name="user" path={paths.users_edit} component={User}/>

            <Route name="user-custom-field" path={paths.user_custom_fields_add} component={UserCustomField}/>
            <Route name="user-custom-field" path={paths.user_custom_fields_edit}  component={UserCustomField}/>
            <Route name="user-custom-fields" path={paths.user_custom_fields} component={UserCustomFields}/>

            <Route name="reports-companies" path={paths.reports_companies} component={ReportsCompanies}/>
            <Route name="report-company" path={paths.report_company} component={ReportCompany}/>

            <Route name="reports-users" path={paths.reports_users} component={ReportsUsers}/>
            <Route name="report-user" path={paths.report_user} component={ReportUser}/>

            <Route name="reports-custom" path={paths.reports_custom} component={ReportsCustom}/>

            <Route name="project" path={paths.project_add} component={Project}/>
            <Route name="project" path={paths.project_edit} component={Project}/>

            <Route name="tag" path={paths.tag_add} component={Tag}/>
            <Route name="tag" path={paths.tag_edit} component={Tag}/>

            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Route>
);
