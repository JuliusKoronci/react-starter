import React from 'react';
import {Link} from 'react-router';
import Pagination from '../../_partials/pagination.jsx';
import {generateRoute} from '../../../../../../config/router';
import DeleteButton from '../../../../../components/Main/_partials/DeleteButton';

const statuses = (props) => {
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
                    <span className="uk-input-group-addon"><a className="md-btn md-btn-primary"
                                                              href="#">Search</a></span>
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

                    {props.data.map((status, i) => {
                        return (
                            <tr key={i}>
                                <td>{status.id}</td>
                                <td>{status.title}</td>
                                <td className="uk-text-center">{status.description}</td>
                                <td className="uk-text-center">
                                    <button className="md-btn" style={{backgroundColor:status.color}}>{status.color}</button>
                                </td>
                                <td className="uk-text-center">{status.is_active ? 'yes' : 'no'}</td>
                                <td className="uk-text-center">

                                    {status.is_active && <DeleteButton handleDelete={props.handleDelete} id={status.id} />}
                                    <Link to={generateRoute('statuses_edit',{statusId:status.id})} className="md-btn md-btn-primary" >Edit</Link>

                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <Pagination links={props._links} total={props.total} page={props.page}
                            loadFunction={props.loadStatuses}/>
                <div className="text-allign-right">
                    <Link to="/settings/statuses/add" className="md-btn md-btn-primary">Add</Link>
                </div>
            </div>
        </div>
    );
};



export default statuses;
