import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const UserCustomFields = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">User custom fields</h1>
                </div>
                <hr/>
                <div className="uk-input-group">
                    <span className="uk-input-group-addon"><i className="material-icons md-24">&#xE8B6;</i></span>
                    <input type="text" className="md-input" />
                    <span className="uk-input-group-addon"><a className="md-btn md-btn-primary" href="#">Search</a></span>
                </div>
                <table className="uk-table uk-text-nowrap">
                    <thead>
                    <tr>
                        <th>Order</th>
                        <th>User custom field name</th>
                        <th className="uk-text-center">Field type</th>
                        <th className="uk-text-center">Active</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Name</td>
                        <td className="uk-text-center">Input</td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary" href="settings_status.html">Edit</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="text-allign-right">
                    <Link to="/settings/user-custom-fields/add" className="md-btn md-btn-primary" >Add</Link>
                </div>
            </div>
        </div>
    );
};

UserCustomFields.propTypes = {
    prop: PropTypes.object.isRequired
};

export default UserCustomFields;
