import React, {PropTypes} from 'react';

const add_automated_task = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Add automated task</h1>
                </div>
                <hr/>

            </div>
        </div>
    );
};

add_automated_task.propTypes = {
    prop: PropTypes.object.isRequired
};

export default add_automated_task;
