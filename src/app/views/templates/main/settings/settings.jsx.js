import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const settings = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Settings</h1>
                </div>
                <hr/>
                <table className="uk-table uk-text-nowrap">
                    <tbody>
                    <tr>
                        <td>
                            <Link to='/settings/automated_tasks' className="uk-text-large">Automated tasks</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/Companies' className="uk-text-large">Companies</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/company_custom_fields' className="uk-text-large">Companies custom
                                fields</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/email_notifications' className="uk-text-large">Email notifications</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/imaps' className="uk-text-large">IMAPs</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/project_shared_filters' className="uk-text-large">Project Shared
                                Filters</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/roles' className="uk-text-large">Roles</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/shared_filters' className="uk-text-large">Shared Filters</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/smtps' className="uk-text-large">SMTPs</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/statuses' className="uk-text-large">Statuses</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/task_custom_fields' className="uk-text-large">Task custom Fields</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/trigers' className="uk-text-large">Trigers</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/units' className="uk-text-large">Units</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/users' className="uk-text-large">Users</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/settings/user_custom_fields' className="uk-text-large">Users custom
                                fields</Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

settings.propTypes = {
    prop: PropTypes.object.isRequired
};

export default settings;
