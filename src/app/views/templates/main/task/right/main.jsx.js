import React, {PropTypes} from 'react';
import Status from './status.jsx';
import Repeat from './repeat.jsx';
import Attachment from './attachment.jsx';
import Tag from './tag.jsx';
import DatePicker from '../../../../../forms/Task/Datepicker.form';
import Select from '../../../../../forms/Task/Select.form';
import configResolver from '../../../../../../config/configResolver';

const main = ({task, user, actions, statuses}) => {
    return (
        <div className="md-list md-list-addon">
            <Status task={task} statuses={statuses} user={user} action={actions.handleStatus}/>
            <Select label="Project"
                    icon="&#xE2C8;"
                    defaultValue=''
                    options={[{value: 1, label: 'Test'}, {value: 2, label: 'Test 2'}]}
                    action={(e) => {
                        actions.loadEntityList(configResolver.updateProject(e.target.value, task.id))
                    }}/>
            <Select label="Requester"
                    icon="&#xE7FD;"
                    defaultValue=''
                    options={[{value: 1, label: 'Test'}, {value: 2, label: 'Test 2'}]}
                    action={(e) => {
                        console.log(e.target.value)
                    }}/>
            <Select label="Company"
                    icon="&#xE7EE;"
                    defaultValue=''
                    options={[{value: 1, label: 'Test'}, {value: 2, label: 'Test 2'}]}
                    action={(e) => {
                        console.log(e.target.value)
                    }}/>
            <Select label="Assigned"
                    icon="&#xE7FE;"
                    defaultValue=''
                    options={[{value: 1, label: 'Test'}, {value: 2, label: 'Test 2'}]}
                    action={(e) => {
                        console.log(e.target.value)
                    }}/>
            <DatePicker taskId={task.id} action={actions.taskUpdated} value={task.startedAt && task.startedAt.date}
                        fieldName="started_at" label="Start At" icon="&#xE858;"/>
            <DatePicker taskId={task.id} action={actions.taskUpdated}
                        fieldName="deadline" label="Deadline" icon="&#xE8B2;"/>
            <DatePicker taskId={task.id} action={actions.taskUpdated}
                        fieldName="closed_at" label="Closed At" icon="&#xE5CD;"/>
            <Repeat/>
            <Attachment/>
            <Tag/>
        </div>
    );
};

main.propTypes = {
    task: PropTypes.object.isRequired
};

export default main;