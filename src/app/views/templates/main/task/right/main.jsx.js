import React, {PropTypes} from 'react';
import Status from './status.jsx';
import Project from './project.jsx';
import Requester from './requester.jsx';
import Company from './company.jsx';
import Assigned from './assigned.jsx';
import StartDate from './startDate.jsx';
import DeadlineDate from './deadlineDate.jsx';
import CloseDate from './closeDate.jsx';
import Repeat from './repeat.jsx';
import Attachment from './attachment.jsx';
import Tag from './tag.jsx';
import Custom from './custom.jsx';
import DatePicker from '../../../../../forms/Task/Datepicker.form'

const main = ({task, user, actions, handleStatus, statuses}) => {
    return (
        <div className="md-list md-list-addon">
            <Status task={task} statuses={statuses} user={user} action={handleStatus}/>
            <Project/>
            <Requester/>
            <Company/>
            <Assigned/>
            <DatePicker taskId={task.id} action={actions.taskUpdated}
                        fieldName="startedAt" label="Start At" icon="&#xE858;"/>
            <DatePicker taskId={task.id} action={actions.taskUpdated}
                        fieldName="deadline" label="Deadline" icon="&#xE8B2;"/>
            <DatePicker taskId={task.id} action={actions.taskUpdated}
                        fieldName="closedAt" label="Closed At" icon="&#xE5CD;"/>
            <Repeat/>
            <Attachment/>
            <Tag/>
            <Custom/>
        </div>
    );
};

main.propTypes = {
    task: PropTypes.object.isRequired
};

export default main;