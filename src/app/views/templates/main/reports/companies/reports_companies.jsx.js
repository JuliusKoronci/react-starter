import React from 'react';
import {Link} from 'react-router';


const reports_companies = () => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Companies reports</h1>
                </div>
                <hr/>

                <div className="uk-form-width-medium uk-margin">
                    <h3 className="heading_a">Tasks close date</h3>
                </div>
                <div className="uk-grid uk-margin">
                    <div className="uk-form-width-mini">
                        <p>From:</p>
                    </div>
                    <div className="uk-form-width-medium">
                        <input type="text" className="md-input"/>
                    </div>
                    <div className="uk-form-width-mini">
                        <p>To:</p>
                    </div>
                    <div className="uk-form-width-medium">
                        <input type="text" className="md-input"/>
                    </div>
                    <div className="uk-form-width-small">
                        <a className="md-btn md-btn-success" href="#">GENERATE</a>
                    </div>
                </div>


                <table className="uk-table uk-text-nowrap">
                    <thead>
                    <tr>
                        <th>Company Name</th>
                        <th className="uk-text-center"> Work Hours</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><Link to='/reports/company' className="uk-text-large">Company 1</Link></td>
                        <td className="uk-text-center">10</td>
                    </tr>
                    <tr>
                        <td><Link to='/reports/company' className="uk-text-large">Company 2</Link></td>
                        <td className="uk-text-center">20</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
        ;
};


export default reports_companies;
