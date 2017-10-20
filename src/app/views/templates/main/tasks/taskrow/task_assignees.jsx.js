import React, {PropTypes} from 'react';

const taskAssignees = ({task}) => {
    return (
        <div>
        {task.taskHasAssignedUsers && task.taskHasAssignedUsers.map((user, i) => {
            return (user.user?user.user.username +', ':'')
        })}
        </div>
    )
};


taskAssignees.propTypes = {
    task: PropTypes.object.isRequired
};


export default taskAssignees;