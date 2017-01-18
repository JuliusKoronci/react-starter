import React, {PropTypes} from 'react';
import TagList from './taskrow/tags.jsx';
import TaskAssignees from './taskrow/task_assignees.jsx'
import TaskStatus from './taskrow/task_status.jsx'


const taskrow = ({task}) => {
    return (
        <tr>
            <td className="uk-text-center uk-table-middle small_col">
                <input type="checkbox" data-md-icheck className="check_row"/>
            </td>
            <td className="uk-text-center"><span className="uk-text-muted uk-text-nowrap">{task.id}</span></td>
            <td>
                <a href="page_issue_details.html" className="uk-text-large">{task.title}</a>
                <TagList task={task}/>
            </td>

            <td>{task.requestedBy.username}</td>
            <td>{task.createdBy.company.title}</td>


            <td>
                <TaskAssignees task={task}/>
            </td>

            <td>{task.createdAt.date}</td>
            <td>{task.deadline}</td>

            <td>
                <TaskStatus task={task}/>
            </td>
        </tr>
    );
};

taskrow.propTypes = {
    task: PropTypes.object.isRequired
};

export default taskrow;