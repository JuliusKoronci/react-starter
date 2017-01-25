import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const EmailNotifications = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Email notification</h1>
                </div>
                <hr/>

                
                
                
                







                <div className="text-allign-right">
                    <Link to="/settings/email-notification/add" className="md-btn md-btn-primary" >Add</Link>
                </div>
            </div>
        </div>
    );
};

EmailNotifications.propTypes = {
    prop: PropTypes.object.isRequired
};

export default EmailNotifications;
