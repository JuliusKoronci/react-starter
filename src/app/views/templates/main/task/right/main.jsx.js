import React, {PropTypes} from 'react';
import Status from './status.jsx';
// import Repeat from './repeat.jsx';
import Attachment from './attachment.jsx';
import Tag from './tag.jsx';
import DatePicker from '../../../../../forms/Task/Datepicker.form';
import Select from '../../../../../forms/Task/Select.form';
import configResolver from '../../../../../../config/configResolver';
import ReactSelect from 'react-select';
import CustomAttributeInput from '../../../../../forms/general/CustomAttributeInput.form';


const main = ({task, user, actions, options, handleFileUpload, handleFileDownload, handleFileDelete,formInputChangeHandler, formTaskAttributeChangeHandler, form, taskAttributes}) => {

    const assignedOptions = options.assigner.map(r => {
        // return {value: r.id, label: r.username}
        return {id: r.id, title: r.username}
    });


    // console.log(assignedOptions)
// console.log(form.assigned);
// console.log(taskAttributes);

    return (
        <div className="md-list md-list-addon">



            {taskAttributes.map(ta=>{
                let name=ta.id;

                //filter
                // let value=form.task_data&&form.task_data[ta.id]? form.task_data[ta.id].value:'';

                let value=form.task_data.filter((td) => parseInt(td.id, 10) === parseInt(ta.id, 10));
                if(value.length>0){
                    value=value[0].value;
                }else{
                    value='';
                }

                return (
                    <div key={ta.id}>
                        <CustomAttributeInput type={ta.type} customAttribute={ta} title={ta.title} value={value} action={formTaskAttributeChangeHandler} name={name} />
                    </div>
                )

            })}


            <hr />
            <hr />



            <Status task={task} statuses={options.status} user={user} action={actions.handleStatus}/>


            <Select label="Project"
                    icon="&#xE2C8;"
                    // defaultValue={task.project ? task.project.id : ''}
                    defaultValue={form.project || ''}
                    options={options.project}
                    // action={(e) => {actions.patchEntity(configResolver.updateProject(e.target.value, task.id))}}
                value={form.project}
                // defaultValue=''
                name='project'
                    action={(e) => {
                        formInputChangeHandler('project',e.target.value)
                    }}

            />


            <Select label="Requester"
                    icon="&#xE7FD;"
                    // defaultValue={task.requestedBy.id || ''}
                    defaultValue={form.requester || ''}
                    options={options.requester.map(r => {
                        return {id: r.id, title: r.username}
                    })}
                    action={(e) => {
                        // actions.patchEntity(configResolver.updateRequester(e.target.value, task.id))
                        formInputChangeHandler('requester',e.target.value)
                    }}/>
            <Select label="Company"
                    icon="&#xE7EE;"
                    // defaultValue={task.company ? task.company.id : ''}
                    options={options.company}
                    defaultValue={form.company}
                    action={(e) => {
                        formInputChangeHandler('company',e.target.value)
                        // actions.patchEntity(configResolver.updateCompany(e.target.value, task.id))
                    }}/>



            <div className="uk-input-group" style={{marginTop: '10px'}}>


                <Select label="Assigned"
                        icon="&#xE7FD;"
                        defaultValue={form.assigned&&form.assigned[0]&&form.assigned[0]['userId']?form.assigned[0]['userId']: ''}
                        options={assignedOptions}
                        action={(e) => {
                            formInputChangeHandler('assigned',[{userId:e.target.value}])
                        }}/>


                 {/*<span className="uk-input-group-addon"><i className="material-icons">&#xE7FE;</i></span>*/}
                 {/*<label className="uk-text-muted">Assigned</label>*/}
                {/*<ReactSelect multi={true}*/}
                             {/*value={*/}

                                 {/*form.assigned.map((tHuser, i) => {*/}
                                     {/*// console.log(tHuser)*/}

                                     {/*return {*/}
                                         {/*value: tHuser.userId,*/}
                                         {/*label: tHuser.username*/}
                                     {/*}*/}

                                     {/*// return {*/}
                                     {/*//     value: tHuser.user.id,*/}
                                     {/*//     label: tHuser.user.username*/}
                                     {/*// }*/}
                                 {/*})*/}
                             {/*}*/}
                             {/*options={assignedOptions}*/}
                             {/*joinValues={true}*/}
                             {/*onChange={(values) => {*/}
                                 {/*formInputChangeHandler('assigned',values.map(value=>{return {userId:value.value,username:value.label} }))*/}

                                 {/*// const config = configResolver.assignUser(values, task.id, null);*/}
                                 {/*// actions.patchEntity(config, config.values);*/}
                             {/*}}*/}
                {/*/>*/}


            </div>

            <DatePicker taskId={task.id} action={formInputChangeHandler} value={form.started_at && form.started_at.date}
                        fieldName="started_at" label="Start At" icon="&#xE858;" formInputChangeHandler={formInputChangeHandler} />
            <DatePicker taskId={task.id} action={formInputChangeHandler}  value={form.deadline && form.deadline.date} formInputChangeHandler={formInputChangeHandler}
                        fieldName="deadline" label="Deadline" icon="&#xE8B2;"/>
            <DatePicker taskId={task.id} action={formInputChangeHandler}  value={form.closed_at && form.closed_at.date} formInputChangeHandler={formInputChangeHandler}
                        fieldName="closed_at" label="Closed At" icon="&#xE5CD;"/>

            {/*<Repeat/>*/}
            <Attachment task={task} handleFileUpload={handleFileUpload} handleFileDownload={handleFileDownload} handleFileDelete={handleFileDelete} />


            <Tag
                tagValues={form.tags}
                options={options.tag.map(tag => {
                    return {
                        value: tag.id,
                        label: tag.title
                    }
                })}
                setValues={(values) => {

                    formInputChangeHandler('tags',values)
                    // const config = configResolver.addTags(values, task.id);
                    // actions.patchEntity(config, config.values);


                }}/>


            <hr />





        </div>
    );
};

main.propTypes = {
    task: PropTypes.object.isRequired
};

export default main;