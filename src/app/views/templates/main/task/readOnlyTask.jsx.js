import React, {PropTypes} from 'react';

const readOnlyTask = ({task}) => {
    return (
        <div>Readonly</div>
    );
};

readOnlyTask.propTypes = {
    task: PropTypes.object.isRequired
};

export default readOnlyTask;