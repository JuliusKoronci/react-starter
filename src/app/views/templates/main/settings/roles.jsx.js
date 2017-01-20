import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const roles = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Roles</h1>
                </div>
                <hr/>
            </div>
        </div>
    );
};

roles.propTypes = {
    prop: PropTypes.object.isRequired
};

export default roles;
