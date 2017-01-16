import React, {PropTypes} from 'react';
import TaskList from '../tasks/tasklist.jsx';
const dashboard = (props) => {
    return (
        <TaskList props=""/>
    );
};

dashboard.propTypes = {
    props: PropTypes.object.isRequired
};

export default dashboard;