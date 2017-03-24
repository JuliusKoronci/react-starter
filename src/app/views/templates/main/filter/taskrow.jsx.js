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


                {columns[0].title && <td>
                    <Link className="uk-text-large" to={'/tasks/' + task.id}>{task.title}</Link>
                    <TagList task={task}/>
                </td>}

            {columns[1].status && <td><TaskStatus task={task}/></td>}

            {columns[2].project && <td>{task.project.title}</td>}

            {columns[3].creator && <td>{task.createdBy.username}</td>}

            {columns[4].requester && <td>{task.requestedBy.username}</td>}

            {columns[5].company && <td>{task.company.title}</td>}

            {columns[6].assigned && <td><TaskAssignees task={task}/></td>}

            {columns[7].tag && <td>{task.tags.map((tag)=>{return tag.title})}</td>}

            {columns[8].deadline && <td>{dateFormat(task.deadline)}</td>}


        </tr>
    );
};
taskrow.propTypes = {
    task: PropTypes.object.isRequired
};

export default taskrow;