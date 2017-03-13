import React, {PropTypes} from 'react';
import TagList from '../tasks/taskrow/tags.jsx';
import TaskAssignees from '../tasks/taskrow/task_assignees.jsx';
import TaskStatus from '../tasks/taskrow/task_status.jsx';
import {Link} from 'react-router';
import dateFormat from '../../../../services/formatedDate';

const taskrow = ({task,columns}) => {
    return (
        <tr>
            <td className="uk-text-center uk-table-middle small_col">
                <input type="checkbox" data-md-icheck className="check_row"/>
            </td>


            <td className="uk-text-center"><span className="uk-text-muted uk-text-nowrap">{task.id}</span></td>


            {columns.title && <td>
                <Link className="uk-text-large" to={'/tasks/' + task.id}>{task.title}</Link>
                <TagList task={task}/>
            </td>}

            {columns.status && <td><TaskStatus task={task}/></td>}

            {columns.project && <td>{task.project.name}</td>}

            {columns.created && <td>{dateFormat(task.createdAt)}</td>}

            {columns.requester && <td>{task.requestedBy.username}</td>}

            {columns.company && <td>{task.company.title}</td>}

            {columns.assigned && <td><TaskAssignees task={task}/></td>}

            {columns.context && <td>context</td>}

            {columns.deadline && <td>{dateFormat(task.deadline)}</td>}


        </tr>
    );
}
taskrow.propTypes = {
    task: PropTypes.object.isRequired
};

export default taskrow;