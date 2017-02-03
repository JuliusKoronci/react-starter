import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {paths} from '../../../../../config/router';

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
                            <Link to={paths.automated_tasks} className="uk-text-large">Automated tasks</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.companies} className="uk-text-large">Companies</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.companies_attributes} className="uk-text-large">Companies custom
                                fields</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.imaps} className="uk-text-large">IMAPs</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.project_shared_filters} className="uk-text-large">Project Shared
                                Filters</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.roles} className="uk-text-large">Roles</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.shared_filters} className="uk-text-large">Shared Filters</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.smtps} className="uk-text-large">SMTPs</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.statuses} className="uk-text-large">Statuses</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.task_custom_fields} className="uk-text-large">Task custom Fields</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.triggers} className="uk-text-large">Triggers</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.units} className="uk-text-large">Units</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.users} className="uk-text-large">Users</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={paths.user_custom_fields} className="uk-text-large">Users custom
                                fields</Link>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className="text-allign-right">
                    <a className="md-btn md-btn-primary" href="settings_company.html">Add</a>
                </div>
            </div>
        </div>
    );
};

settings.propTypes = {
    prop: PropTypes.object.isRequired
};

export default settings;
