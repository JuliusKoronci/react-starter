import React from 'react';
import {Link} from 'react-router';
// import Pagination from '../../_partials/pagination.jsx';
import DeleteButton from '../../../../../components/Main/_partials/DeleteButton';
import {generateRoute} from '../../../../../../config/router';

const smtps = (props) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">SMTPs</h1>
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
                        <th>email</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map((smtp, i) => {
                        return (
                            <tr key={i}>
                                <td>{smtp.id}</td>
                                <td>{smtp.email}</td>
                                <td className="uk-text-center">
                                    <DeleteButton handleDelete={props.handleDelete} id={smtp.id} />
                                    <Link to={generateRoute('smtps_edit',{smtpId:smtp.id})} className="md-btn md-btn-primary" >Edit</Link>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <div className="text-allign-right">
                    <Link to="/settings/smtps/add" className="md-btn md-btn-primary">Add</Link>
                </div>
            </div>
        </ div >
    );
};

export default smtps;
