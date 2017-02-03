import React, {PropTypes} from 'react';

const taskStatus = ({task}) => {
    const statuses = task.taskHasAssignedUsers.length > 0 && task.taskHasAssignedUsers.map((record) => {
            return (
                <span className="uk-badge" style={{background: record.status.color}}>{record.status.title}</span>
            );
        });
    return (
        <div>
            {statuses}
        </div>
    )
};


taskStatus.propTypes = {
    task: PropTypes.object.isRequired
};

export default taskStatus;