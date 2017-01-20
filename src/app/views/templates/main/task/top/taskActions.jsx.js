import React, {PropTypes} from 'react';

const taskActions = ({task}) => {
    return (
        <div>TaskActions</div>
    );
};

taskActions.propTypes = {
    task: PropTypes.object.isRequired
};

export default taskActions;