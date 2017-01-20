import React, {PropTypes} from 'react';
import dateFormat from '../../../../../services/formatedDate'

const taskInfo = ({task}) => {
    return (
        <div className="uk-width-medium-3-4">
            <input type="text" className="header_b md-input" value="Task name"/>

            <p className="uk-text-muted">
                Created: {task.createdBy.email} | {dateFormat(task.createdAt)}
            </p>
        </div>
    );
};

taskInfo.propTypes = {
    task: PropTypes.object.isRequired
};

export default taskInfo;