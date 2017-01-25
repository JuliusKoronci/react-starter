import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const add_shared_filter = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add shared filter</h1>
                </div>
                <hr/>

            </div>
        </div>
    );
};

add_shared_filter.propTypes = {
    prop: PropTypes.object.isRequired
};

export default add_shared_filter;
