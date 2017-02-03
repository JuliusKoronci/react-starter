import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const trigers = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Trigers</h1>
                </div>
                <hr/>
                <table className="uk-table uk-text-nowrap">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th className="uk-text-center">Description</th>
                        <th className="uk-text-center">Active</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>task overdue</td>
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
                    <Link to="/settings/trigers/add" className="md-btn md-btn-primary" >Add</Link>
                </div>
            </div>
        </div>
    );
};

trigers.propTypes = {
    prop: PropTypes.object.isRequired
};

export default trigers;
