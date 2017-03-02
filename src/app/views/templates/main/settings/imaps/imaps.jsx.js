import React from 'react';
import {Link} from 'react-router';
import Pagination from '../../_partials/pagination.jsx';
import DeleteButton from '../../../../../components/Main/_partials/DeleteButton';
import {generateRoute} from '../../../../../../config/router';

const imaps = (props) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">IMAPs</h1>
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
                        <th className="uk-text-center">Project</th>
                        <th className="uk-text-center">Description</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map((imap, i) => {
                        return (
                            <tr key={i}>
                                <td>{imap.id}</td>
                                <td>{imap.inbox_email}</td>
                                <td>{imap.project.title}</td>
                                <td className="uk-text-center">{imap.project.description}</td>
                                <td className="uk-text-center">
                                    <DeleteButton handleDelete={props.handleDelete} id={imap.id} />
                                    <Link to={generateRoute('imaps_edit',{imapId:imap.id})} className="md-btn md-btn-primary" >Edit</Link>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>

                {props._links && props.total && props.page && <Pagination links={props._links} total={props.total} page={props.page}
                                                                          loadFunction={props.loadImaps}/>
                }


                <div className="text-allign-right">
                    <Link to="/settings/imaps/add" className="md-btn md-btn-primary">Add</Link>
                </div>
            </div>
        </div>
    );
};

export default imaps;
