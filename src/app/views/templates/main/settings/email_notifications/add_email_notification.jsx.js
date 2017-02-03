import React, {PropTypes} from 'react';

const add_email_notification = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add email notification</h1>
                </div>
                <hr/>

            </div>
        </div>
    );
};

add_email_notification.propTypes = {
    prop: PropTypes.object.isRequired
};

export default add_email_notification;
