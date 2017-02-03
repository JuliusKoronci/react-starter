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
import CompaniesCustomFields from '../app/components/Main/Settings/CompaniesCustomFields/CompaniesCustomFields';
import CompaniesCustomField from '../app/components/Main/Settings/CompaniesCustomFields/CompaniesCustomField';
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
import TaskCustomFields from '../app/components/Main/Settings/TaskCustomFields/TaskCustomFields';
import TaskCustomField from '../app/components/Main/Settings/TaskCustomFields/TaskCustomField';
import Trigers from '../app/components/Main/Settings/Trigers/Trigers';
import Triger from '../app/components/Main/Settings/Trigers/Triger';
import Units from '../app/components/Main/Settings/Units/Units';
import Unit from '../app/components/Main/Settings/Units/Unit';
import Users from '../app/components/Main/Settings/Users/Users';
import User from '../app/components/Main/Settings/Users/User';
import UserCustomFields from '../app/components/Main/Settings/UserCustomFields/UserCustomFields';
import UserCustomField from '../app/components/Main/Settings/UserCustomFields/UserCustomField';
import Task from '../app/components/Main/Task/Task';

export default (
    <Route component={App}>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/" component={Main}>
            <IndexRoute component={Dashboard}/>
            <Route path='tasks' component={Task}/>
            <Route path='tasks/:taskId' component={Task}/>
            <Route path="profile" component={Profile}/>
            <Route name="settings" path="settings/default" component={Settings}/>
            <Route name="automated-tasks" path="settings/automated-tasks/add" component={AutomatedTask}/>
            <Route name="automated-tasks" path="settings/automated-tasks" component={AutomatedTasks}/>


            <Route name="companies" path="settings/companies" component={Companies}/>
            <Route name="company" path="settings/companies/add" component={Company}/>


            <Route name="companies-custom-field" path="settings/companies-custom-fields/add" component={CompaniesCustomField}/>
            <Route name="companies-custom-fields" path="settings/companies-custom-fields" component={CompaniesCustomFields}/>

            <Route name="imap" path="settings/imaps/add" component={Imap}/>
            <Route name="imaps" path="settings/imaps" component={Imaps}/>


            <Route name="project-shared-filter" path="settings/project-shared-filters/add" component={ProjectSharedFilter}/>
            <Route name="project-shared-filters" path="settings/project-shared-filters" component={ProjectSharedFilters}/>

            <Route name="role" path="settings/roles/add" component={Role}/>
            <Route name="roles" path="settings/roles" component={Roles}/>


            <Route name="shared-filter" path="settings/shared-filters/add" component={SharedFilter}/>
            <Route name="shared-filters" path="settings/shared-filters" component={SharedFilters}/>


            <Route name="smtp" path="settings/smtps/add" component={Smtp}/>
            <Route name="smtps" path="settings/smtps" component={Smtps}/>


            <Route name="status" path="settings/statuses/add" component={Status}/>
            <Route name="statuses" path="settings/statuses" component={Statuses}/>


            <Route name="task-custom-field" path="settings/task-custom-fields/add" component={TaskCustomField}/>
            <Route name="task-custom-fields" path="settings/task-custom-fields" component={TaskCustomFields}/>

            <Route name="triger" path="settings/trigers/add" component={Triger}/>
            <Route name="trigers" path="settings/trigers" component={Trigers}/>

            <Route name="unit" path="settings/units/add" component={Unit}/>
            <Route name="units" path="settings/units" component={Units}/>

            <Route name="user" path="settings/users/add" component={User}/>
            <Route name="users" path="settings/users" component={Users}/>

            <Route name="user-custom-field" path="settings/user-custom-fields/add" component={UserCustomField}/>
            <Route name="user-custom-fields" path="settings/user-custom-fields" component={UserCustomFields}/>

            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Route>
);