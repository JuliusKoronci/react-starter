import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const add_unit = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add unit</h1>
                </div>
                <hr/>

            </div>
        </div>
    );
};

add_unit.propTypes = {
    prop: PropTypes.object.isRequired
};

export default add_unit;
