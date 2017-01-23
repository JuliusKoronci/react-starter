import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const user_form = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add user</h1>
                </div>
                <hr/>

            </div>
        </div>
    );
};

user_form.propTypes = {
    prop: PropTypes.object.isRequired
};

export default user_form;
