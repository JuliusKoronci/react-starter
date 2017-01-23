import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const statuses = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Statuses</h1>
                </div>
                <hr/>

                 <div className="uk-input-group">
                    <span className="uk-input-group-addon"><i className="material-icons md-24">&#xE8B6;</i></span>
                    <input type="text" className="md-input"/>
                    <span className="uk-input-group-addon"><a className="md-btn md-btn-primary" href="#">Search</a></span>
                </div>

                <table className="uk-table uk-text-nowrap">
                    <thead>
                    <tr>
                        <th>Order</th>
                        <th>Satus name</th>
                        <th className="uk-text-center">Description</th>
                        <th className="uk-text-center">Color</th>
                        <th className="uk-text-center">Active</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>New</td>
                        <td className="uk-text-center"></td>
                        <td className="uk-text-center"><a className="md-btn md-bg-blue-400 md-color-white" href="#">New</a></td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary" href="settings_status.html">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Solved</td>
                        <td className="uk-text-center"></td>
                        <td className="uk-text-center"><a className="md-btn md-bg-green-400 md-color-white" href="#">Solved</a>
                        </td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary" href="settings_status.html">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pending</td>
                        <td className="uk-text-center"></td>
                        <td className="uk-text-center"><a className="md-btn md-bg-orange-400 md-color-white"
                                                      href="#">Pending</a></td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary" href="settings_status.html">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Closed</td>
                        <td className="uk-text-center"></td>
                        <td className="uk-text-center"><a className="md-btn md-bg-grey-400 md-color-white" href="#">Closed</a>
                        </td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary" href="settings_status.html">Edit</a>
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

statuses.propTypes = {
    prop: PropTypes.object.isRequired
};

export default statuses;
