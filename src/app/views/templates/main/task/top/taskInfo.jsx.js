import React, {PropTypes} from 'react';

const taskInfo = ({task}) => {
    return (
        <div className="uk-width-medium-3-4">
            <input type="text" className="header_b md-input" value="Task name"/>

            <p className="uk-text-muted">
                Created: Branislav Šusta (branislav.susta@gmail.com) | 06.12.2016
                11:01
            </p>
        </div>
    );
};

taskInfo.propTypes = {
    task: PropTypes.object.isRequired
};

export default taskInfo;