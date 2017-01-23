import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const add_status = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add status</h1>
                </div>
                <hr/>

            </div>
        </div>
    );
};

add_status.propTypes = {
    prop: PropTypes.object.isRequired
};

export default add_status;
