import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AutomatedTasks = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Automated tasks</h1>
                </div>
                <hr/>
                <div className="uk-margin-bottom">
                    <p>Automated tasks are action to modify ticket properties at a specified time repeat.
                    For example, an automated tasks can change ticket status from Pending to Solve when task start date is expired.
                    The order of automated tasks is important because an automated tasks might contain an action that activates another automated tasks.</p>

                </div>
                <table className="uk-table uk-text-nowrap">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th className="uk-text-center">Start time</th>
                        <th className="uk-text-center">Description</th>
                        <th className="uk-text-center">Active</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>task overdue</td>
                        <td className="uk-text-center">every one hour</td>
                        <td className="uk-text-center">change status pending to solved when is task start overdue</td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary" href="settings_automated_task.html">Edit</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="text-allign-right">
                    <Link to="/settings/automated-tasks/add" className="md-btn md-btn-primary">Add</Link>
                </div>
            </div>
        </div>
    );
};

AutomatedTasks.propTypes = {
    prop: PropTypes.object.isRequired
};

export default AutomatedTasks;
