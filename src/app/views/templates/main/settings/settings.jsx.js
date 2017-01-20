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
                        <td><a href="settings_roles.html" className="uk-text-large"> Roles</a></td>
                    </tr>
                    <tr>
                        <td><a href="settings_shared_filters.html" className="uk-text-large">Shared Filters</a></td>
                    </tr>
                    <tr>
                        <td><a href="settings_project_shared_filters.html" className="uk-text-large">Project Shared
                            Filters</a></td>
                    </tr>
                    <tr>
                        <td><a href="settings_custom_fields.html" className="uk-text-large">Task custom Fields</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="settings_units.html" className="uk-text-large">Units</a></td>
                    </tr>
                    <tr>
                        <td><a href="settings_statuses.html" className="uk-text-large">Statuses</a></td>
                    </tr>
                    <tr>
                        <td><a href="settings_users.html" className="uk-text-large">Users</a></td>
                    </tr>
                    <tr>
                        <td><a href="settings_user_custom_fields.html" className="uk-text-large">Users custom
                            fields </a></td>
                    </tr>
                    <tr>
                        <td><a href="settings_companies.html" className="uk-text-large">Companies</a></td>
                    </tr>
                    <tr>
                        <td><a href="settings_company_custom_fields.html" className="uk-text-large">Companies custom
                            fields </a></td>
                    </tr>
                    <tr>
                        <td><a href="settings_imaps.html" className="uk-text-large">Imap</a></td>
                    </tr>
                    <tr>
                        <td><a href="settings_smtps.html" className="uk-text-large">SMTP</a></td>
                    </tr>
                    <tr>
                        <td><a href="settings_smtps.html" className="uk-text-large">Trigers</a></td>
                    </tr>
                    <tr>
                        <td><a href="settings_automated_tasks.html" className="uk-text-large">Automated tasks</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="settings_automated_tasks.html" className="uk-text-large">Email notification</a>
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
