import React from 'react';
import {Link} from 'react-router';
import Pagination from '../../_partials/pagination.jsx';
import {generateRoute} from '../../../../../../config/router';

const reports_custom = (props) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Custom reports</h1>
                </div>
                <hr/>

            </div>
        </div>
    );
};



export default reports_custom;
