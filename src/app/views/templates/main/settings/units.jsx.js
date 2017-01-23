import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const units = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Units</h1>
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
                        <th>Units name</th>
                        <th className="uk-text-center">Description</th>
                        <th className="uk-text-center">Active</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>ks</td>
                        <td className="uk-text-center"></td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary" href="settings_unit.html">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>kg</td>
                        <td className="uk-text-center"></td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary" href="settings_unit.html">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>m</td>
                        <td className="uk-text-center"></td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary" href="settings_unit.html">Edit</a>
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

units.propTypes = {
    prop: PropTypes.object.isRequired
};

export default units;
