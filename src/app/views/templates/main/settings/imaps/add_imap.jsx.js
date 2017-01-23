import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const add_imap = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add IMAP</h1>
                </div>
                <hr/>

            </div>
        </div>
    );
};

add_imap.propTypes = {
    prop: PropTypes.object.isRequired
};

export default add_imap;
