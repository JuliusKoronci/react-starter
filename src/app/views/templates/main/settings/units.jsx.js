import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const units = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Units</h1>
                </div>
                <hr/>
            </div>
        </div>
    );
};

units.propTypes = {
    prop: PropTypes.object.isRequired
};

export default units;
