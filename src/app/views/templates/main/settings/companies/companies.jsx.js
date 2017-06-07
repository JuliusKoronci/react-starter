import React from 'react';
import {Link} from 'react-router';
import Pagination from '../../_partials/pagination.jsx';
import DeleteButton from '../../../../../components/Main/_partials/DeleteButton';
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
                    <input type="text" className="md-input" value={props.searchTerm} onChange={props.searchInputOnChange.bind(null) } />
                    <span className="uk-input-group-addon"><button className="md-btn md-btn-primary" onClick={props.searchHandler}>Search</button></span>
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
                        <tr key={company.id}>
                        <td>{company.id}</td>
                            <td><Link to={generateRoute('companies_edit',{companyId:company.id})} >{company.title}</Link></td>
                        <td className="uk-text-center">{company.is_active ? 'yes' : 'no'}</td>
                        <td className="uk-text-center">

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
