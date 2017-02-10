import React, {PropTypes} from 'react';
import Status from './status.jsx';
import Repeat from './repeat.jsx';
import Attachment from './attachment.jsx';
import Tag from './tag.jsx';
import DatePicker from '../../../../../forms/Task/Datepicker.form';
import Select from '../../../../../forms/Task/Select.form';
import configResolver from '../../../../../../config/configResolver';


const main = ({task, user, actions, statuses, projects, handleFileUpload, handleFileDownload}) => {
    return (
        <div className="md-list md-list-addon">
            <Status task={task} statuses={statuses} user={user} action={actions.handleStatus}/>
            <Select label="Project"
                    icon="&#xE2C8;"
                    defaultValue={task.project ? task.project.id : ''}
                    options={projects.data.filter(project => project.is_active)}
                    action={(e) => {
                        actions.patchEntity(configResolver.updateProject(e.target.value, task.id))
                    }}/>
            <Select label="Requester"
                    icon="&#xE7FD;"
                    defaultValue=''
                    options={[{id: 1, title: 'Test'}, {id: 2, title: 'Test 2'}]}
                    action={(e) => {
                        console.log(e.target.value)
                    }}/>
            <Select label="Company"
                    icon="&#xE7EE;"
                    defaultValue=''
                    options={[{id: 1, title: 'Test'}, {id: 2, title: 'Test 2'}]}
                    action={(e) => {
                        console.log(e.target.value)
                    }}/>
            <Select label="Assigned"
                    icon="&#xE7FE;"
                    defaultValue=''
                    options={[{id: 352, title: 'Test'}, {id: 358, title: 'Test 2'}]}
                    action={(e) => {
                        const config = configResolver.assignUser(e.target.value, task.id, null);
                        actions.patchEntity(config, config.values);
                    }}/>
            <DatePicker taskId={task.id} action={actions.taskUpdated} value={task.startedAt && task.startedAt.date}
                        fieldName="started_at" label="Start At" icon="&#xE858;"/>
            <DatePicker taskId={task.id} action={actions.taskUpdated}
                        fieldName="deadline" label="Deadline" icon="&#xE8B2;"/>
            <DatePicker taskId={task.id} action={actions.taskUpdated}
                        fieldName="closed_at" label="Closed At" icon="&#xE5CD;"/>
            <Repeat/>
            <Attachment task={task} handleFileUpload={handleFileUpload} handleFileDownload={handleFileDownload} />

            <Tag tagValues={task.tags} setValues={(values) => console.log(values)}/>
        </div>
    );
};

main.propTypes = {
    task: PropTypes.object.isRequired
};

export default main;