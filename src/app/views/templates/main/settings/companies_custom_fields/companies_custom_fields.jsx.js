import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CompaniesCustomFields = (props) => {
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
                        <th>Id</th>
                        <th>Company custom field name</th>
                        <th className="uk-text-center">Field type</th>
                        <th className="uk-text-center">Active</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map((companyAttribute, i) => {
                        return (
                            <tr key={i}>
                                <td>{companyAttribute.id}</td>
                                <td>{companyAttribute.title}</td>
                                <td className="uk-text-center">{companyAttribute.type}</td>
                                <td className="uk-text-center">{companyAttribute.is_active ? 'yes' : 'no'}</td>
                                <td className="uk-text-center">
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <div className="text-allign-right">
                    <Link to="/settings/companies-custom-fields/add" className="md-btn md-btn-primary">Add</Link>
                </div>
            </div>
        </div>
    );
};


export default CompaniesCustomFields;
