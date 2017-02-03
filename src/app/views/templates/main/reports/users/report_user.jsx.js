import React from 'react';
import {Link} from 'react-router';
import Pagination from '../../_partials/pagination.jsx';
import {generateRoute} from '../../../../../../config/router';

const reports_companies = (props) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-grid" data-uk-grid-margin>
                    <div className="uk-width-medium-3-4">
                        <h1 className="heading_b">Report User 1</h1>
                        <h3 className=""><span className="uk-text-muted">Close Date From:</span> 1.1.2016 <span className="uk-text-muted">To:</span> 31.12.2016</h3>
                    </div>
                    <div className="uk-width-medium-1-4">
                        <span><i className="material-icons md-24 alignright">&#xE8AD;</i></span>
                    </div>
                </div>
                <hr/>

                <div className="uk-overflow-container">
                    <h3 className="heading_b">Tasks report</h3>
                    <table className="uk-table uk-text-nowrap">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Requester</th>
                            <th>Assignet</th>
                            <th>Description</th>
                            <th>Close Date</th>
                            <th>Work hours</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                        </tr>
                        <tr>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                        </tr>
                        <tr>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                        </tr>
                        </tbody>
                    </table>
                    <h4 className="">Total work hours: xy</h4>
                    <h3 className="heading_b">Material report</h3>
                    <table className="uk-table uk-text-nowrap">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>Price</th>
                            <th>Price Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                        </tr>
                        <tr>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                        </tr>
                        <tr>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                        </tr>
                        </tbody>
                    </table>
                    <h4 className="">Total material: xy whitout VAT</h4>
                </div>
            </div>
        </div>
    )
        ;
};


export default reports_companies;
