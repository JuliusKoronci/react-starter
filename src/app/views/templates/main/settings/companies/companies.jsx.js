import React from 'react';
import {Link} from 'react-router';
import Pagination from '../../_partials/pagination.jsx';
import {generateRoute} from '../../../../../../config/router';

const companies = (props) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Companies</h1>
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
                        <th>Company name</th>
                        <th className="uk-text-center">Active</th>
                        <th className="uk-text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {props.data.map((company, i) => {
                        return (
                        <tr key={i}>
                        <td>{company.id}</td>
                            <td><Link to={generateRoute('companies_edit',{companyId:company.id})} >{company.title}</Link></td>
                        <td className="uk-text-center">{company.is_active ? 'yes' : 'no'}</td>
                        <td className="uk-text-center">
                            <a className="md-btn md-btn-danger" href="#">Delete</a>
                            <Link to={generateRoute('companies_edit',{companyId:company.id})} className="md-btn md-btn-primary" >Edit</Link>
                        </td>
                    </tr>
                        );
                    })}
                    </tbody>
                </table>
                <Pagination links={props._links} total={props.total} page={props.page}
                            loadFunction={props.loadCompanies}/>
                <div className="text-allign-right">
                    <Link to="/settings/companies/add" className="md-btn md-btn-primary" >Add</Link>
                </div>
            </div>
        </div>
    );
};



export default companies;