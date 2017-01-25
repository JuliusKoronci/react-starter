import React from 'react';
import {Link} from 'react-router';
import Pagination from '../../_partials/pagination.jsx';

const users = (props) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Users</h1>
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
                        <th>Name</th>
                        <th className="uk-text-center">Email</th>
                        <th className="uk-text-center">Company</th>
                        <th className="uk-text-center">Active</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{user.detailData && user.detailData.name} {user.detailData && user.detailData.surname}</td>
                                <td className="uk-text-center">{user.email}</td>
                                <td className="uk-text-center">{user.company && user.company.title}</td>
                                <td className="uk-text-center">{user.is_active ? 'yes' : 'no'}</td>
                                <td className="uk-text-center">
                                    <Link className="md-btn md-btn-danger" to={'/settings/users/delete/' + user.id}>Delete</Link>
                                    <Link className="md-btn md-btn-primary" to={'/settings/users/edit/' + user.id}>Edit</Link>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <Pagination links={props._links} total={props.total} page={props.page}
                            loadFunction={props.loadUsers}/>
                <div className="text-allign-right">
                    <Link to="/settings/users/add" className="md-btn md-btn-primary">Add</Link>
                </div>
            </div>
        </div>
    );
};


export default users;
