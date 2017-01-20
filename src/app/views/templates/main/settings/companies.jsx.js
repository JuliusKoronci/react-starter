import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const companies = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Companies</h1>
                </div>
                <hr/>
            </div>
        </div>
    );
};

companies.propTypes = {
    prop: PropTypes.object.isRequired
};

export default companies;
