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
import AutomatedTasks from '../app/components/Main/Settings/AutomatedTasks';
import Companies from '../app/components/Main/Settings/Companies';
import CompaniesCustomFields from '../app/components/Main/Settings/CompaniesCustomFields';
import EmailNotification from '../app/components/Main/Settings/EmailNotification';
import Imaps from '../app/components/Main/Settings/Imaps';
import ProjectSharedFilters from '../app/components/Main/Settings/ProjectSharedFilters';
import Roles from '../app/components/Main/Settings/Roles';
import SharedFilters from '../app/components/Main/Settings/SharedFilters';
import Smtps from '../app/components/Main/Settings/Smtps';
import Statuses from '../app/components/Main/Settings/Statuses';
import TaskCustomFields from '../app/components/Main/Settings/TaskCustomFields';
import Trigers from '../app/components/Main/Settings/Trigers';
import Units from '../app/components/Main/Settings/Units';
import Users from '../app/components/Main/Settings/Users';
import UserCustomFields from '../app/components/Main/Settings/UserCustomFields';
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
            <Route name="automated-tasks" path="settings/automated-tasks" component={AutomatedTasks}/>
            <Route name="companies" path="settings/companies" component={Companies}/>
            <Route name="companies-custom-fields" path="settings/companies-custom-fields" component={CompaniesCustomFields}/>
            <Route name="email-notification" path="settings/email-notification" component={EmailNotification}/>
            <Route name="imaps" path="settings/imaps" component={Imaps}/>
            <Route name="project-shared-filters" path="settings/project-shared-filters" component={ProjectSharedFilters}/>
            <Route name="roles" path="settings/roles" component={Roles}/>
            <Route name="shared-filters" path="settings/shared-filters" component={SharedFilters}/>
            <Route name="smtps" path="settings/smtps" component={Smtps}/>
            <Route name="statuses" path="settings/statuses" component={Statuses}/>
            <Route name="task-custom-fields" path="settings/task-custom-fields" component={TaskCustomFields}/>
            <Route name="trigers" path="settings/trigers" component={Trigers}/>
            <Route name="units" path="settings/units" component={Units}/>
            <Route name="users" path="settings/users" component={Users}/>
            <Route name="user-custom-fields" path="settings/user-custom-fields" component={UserCustomFields}/>
            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Route>
);