import React, {PropTypes} from 'react';
import Status from './status.jsx';
import Repeat from './repeat.jsx';
import Attachment from './attachment.jsx';
import Tag from './tag.jsx';
import DatePicker from '../../../../../forms/Task/Datepicker.form';
import Select from '../../../../../forms/Task/Select.form';
import configResolver from '../../../../../../config/configResolver';
import ReactSelect from 'react-select';


const main = ({task, user, actions, options, handleFileUpload, handleFileDownload, handleFileDelete}) => {
    const assignedOptions = options.assigner.map(r => {
        return {value: r.id, label: r.username}
    });

    return (
        <div className="md-list md-list-addon">
            <Status task={task} statuses={options.status} user={user} action={actions.handleStatus}/>
            <Select label="Project"
                    icon="&#xE2C8;"
                    defaultValue={task.project ? task.project.id : ''}
                    options={options.project}
                    action={(e) => {
                        actions.patchEntity(configResolver.updateProject(e.target.value, task.id))
                    }}/>
            <Select label="Requester"
                    icon="&#xE7FD;"
                    defaultValue={task.requestedBy.id || ''}
                    options={options.requester.map(r => {
                        return {id: r.id, title: r.username}
                    })}
                    action={(e) => {
                        actions.patchEntity(configResolver.updateRequester(e.target.value, task.id))
                    }}/>
            <Select label="Company"
                    icon="&#xE7EE;"
                    defaultValue={task.company ? task.company.id : ''}
                    options={options.company}
                    action={(e) => {
                        actions.patchEntity(configResolver.updateCompany(e.target.value, task.id))
                    }}/>
            <div className="uk-input-group" style={{marginTop: '10px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE7FE;</i></span>
                <label className="uk-text-muted">Assigned</label>
                <ReactSelect multi={true}
                             value={
                                 task.taskHasAssignedUsers.map((tHuser, i) => {
                                     return {
                                         value: tHuser.user.id,
                                         label: tHuser.user.username
                                     }
                                 })
                             }
                             options={assignedOptions}
                             joinValues={true}
                             onChange={(values) => {
                                 const config = configResolver.assignUser(values, task.id, null);
                                 actions.patchEntity(config, config.values);
                             }}
                />
            </div>

            <DatePicker taskId={task.id} action={actions.taskUpdated} value={task.startedAt && task.startedAt.date}
                        fieldName="started_at" label="Start At" icon="&#xE858;"/>
            <DatePicker taskId={task.id} action={actions.taskUpdated}
                        fieldName="deadline" label="Deadline" icon="&#xE8B2;"/>
            <DatePicker taskId={task.id} action={actions.taskUpdated}
                        fieldName="closed_at" label="Closed At" icon="&#xE5CD;"/>

            {/*<Repeat/>*/}
            <Attachment task={task} handleFileUpload={handleFileUpload} handleFileDownload={handleFileDownload} handleFileDelete={handleFileDelete} />


            <Tag
                tagValues={task.tags}
                options={options.tag.map(tag => {
                    return {
                        value: tag.id,
                        label: tag.title
                    }
                })}
                setValues={(values) => {
                    const config = configResolver.addTags(values, task.id);
                    actions.patchEntity(config, config.values);
                }}/>
        </div>
    );
};

main.propTypes = {
    task: PropTypes.object.isRequired
};

export default main;