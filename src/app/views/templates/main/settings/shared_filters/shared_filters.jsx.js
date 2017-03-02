import React from 'react';
import {Link} from 'react-router';

const SharedFilters = (props) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Shared filters</h1>
                </div>
                <hr/>
                {/*
                 <div className="uk-input-group">
                 <span className="uk-input-group-addon"><i className="material-icons md-24">&#xE8B6;</i></span>
                 <input type="text" className="md-input"/>
                 <span className="uk-input-group-addon"><a className="md-btn md-btn-primary"
                 href="#">Search</a></span>
                 </div>
                 */}
                <table className="uk-table uk-text-nowrap">
                    <thead>
                    <tr>
                        <th>Order</th>
                        <th>Name</th>
                        <th className="uk-text-center">Icon</th>
                        <th className="uk-text-center">Description</th>
                        <th className="uk-text-center">Role</th>
                        <th className="uk-text-center">Active</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map((sharedFilters, i) => {
                        return (
                            <tr key={i}>
                                <td>{sharedFilters.order}</td>
                                <td>{sharedFilters.name}</td>
                                <td>{sharedFilters.icon}</td>
                                <td className="uk-text-center">{sharedFilters.description}</td>
                                <td className="uk-text-center">{status.is_active ? 'yes' : 'no'}</td>
                                <td className="uk-text-center">
                                    <a className="md-btn md-btn-danger" href="#">Delete</a>
                                    <a className="md-btn md-btn-primary"
                                       href="settings_project_shared_filter.html">Edit</a>
                                    <a className="md-btn md-btn-primary"
                                       href="settings_project_shared_filter.html">UP</a>
                                    <a className="md-btn md-btn-primary"
                                       href="settings_project_shared_filter.html">Down</a>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>

                <div className="text-allign-right">
                    <Link to="/settings/shared-filters/add" className="md-btn md-btn-primary" >Add</Link>
                </div>



            </div>
        </div>
    );
};


export default SharedFilters;
