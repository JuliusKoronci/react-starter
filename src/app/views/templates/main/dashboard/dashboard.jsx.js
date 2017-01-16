import React, {PropTypes} from 'react';
import TaskList from '../tasks/tasklist.jsx';
const dashboard = ({tasks}) => {

    return (
        <TaskList tasks={tasks} />
    );
};

dashboard.propTypes = {
    tasks: PropTypes.object.isRequired
};

export default dashboard;