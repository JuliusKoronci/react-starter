import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CompaniesCustomFields = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Companies custom fields</h1>
                </div>
                <hr/>

                <div className="uk-input-group">
                    <span className="uk-input-group-addon"><i className="material-icons md-24">&#xE8B6;</i></span>
                    <input type="text" className="md-input"/>
                    <span className="uk-input-group-addon"><a className="md-btn md-btn-primary"
                                                              href="#">Search</a></span>
                </div>
                
                <table className="uk-table uk-text-nowrap">
                    <thead>
                    <tr>
                        <th>Order</th>
                        <th>Company custom field name</th>
                        <th className="uk-text-center">Field type</th>
                        <th className="uk-text-center">Active</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Company Name</td>
                        <td className="uk-text-center">Input</td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>ICO</td>
                        <td className="uk-text-center">Input</td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>DIC</td>
                        <td className="uk-text-center">Input</td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>IC DPH</td>
                        <td className="uk-text-center">input</td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Phone</td>
                        <td className="uk-text-center">Input</td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Street</td>
                        <td className="uk-text-center">Input</td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>City</td>
                        <td className="uk-text-center">Input</td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>PSC</td>
                        <td className="uk-text-center">Input</td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                        </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Country</td>
                        <td className="uk-text-center">Input</td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                        </td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Custom field 1</td>
                        <td className="uk-text-center">Number</td>
                        <td className="uk-text-center">Yes</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <a className="md-btn md-btn-primary" href="settings_company_custom_field.html">Edit</a>
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

CompaniesCustomFields.propTypes = {
    prop: PropTypes.object.isRequired
};

export default CompaniesCustomFields;
