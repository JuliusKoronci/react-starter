import React, {PropTypes} from 'react';

const taskInfo = ({task}) => {
    return (
        <div>
            {task.title}
            <p>Created: {task.created_by.username}</p>
        </div>
    );
};

taskInfo.propTypes = {
    task: PropTypes.object.isRequired
};

export default taskInfo;