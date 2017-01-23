import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const add_company = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add company</h1>
                </div>
                <hr/>

            </div>
        </div>
    );
};

add_company.propTypes = {
    prop: PropTypes.object.isRequired
};

export default add_company;
