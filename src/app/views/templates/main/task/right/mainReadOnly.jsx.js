import React, {PropTypes} from 'react';
import Attachment from './attachmentReadOnly.jsx';
import Select from '../../../../../forms/Task/Select.form';


const main = ({task, handleFileDownload, form}) => {


    let status='-';
    let user='';
    if(task.taskHasAssignedUsers.length>0)
    {
        user=task.taskHasAssignedUsers[0].user.username;
        status= <span style={{ background: task.taskHasAssignedUsers[0].status.color }}>{task.taskHasAssignedUsers[0].status.title}</span>;
}

    return (
        <div className="md-list md-list-addon">



            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE896;</i></span>
                <label className="uk-text-muted">Status</label>
                  <input
                          readOnly
                          value={status}
                          className="md-input"
                  />
            </div>


            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE2C8;</i></span>
                <label className="uk-text-muted">Project</label>
                  <input
                        readOnly
                        value={task.project&& task.project.title?task.project.title:''}
                        className="md-input"
                  />
            </div>

            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE7FD;</i></span>
                <label className="uk-text-muted">Requester</label>
                  <input
                          readOnly
                          value={task.requestedBy && task.requestedBy.username?task.requestedBy.username:'-'}
                          className="md-input"
                  />
            </div>

            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE7EE;</i></span>
                <label className="uk-text-muted">Company</label>
                  <input
                         readOnly
                         value={task.company&&task.company.title?task.company.title:'-'}
                         className="md-input"
                  />
            </div>

            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE7FD;</i></span>
                <label className="uk-text-muted">Assigned</label>
                  <input
                         readOnly
                         value={task.taskHasAssignedUsers.length>0 ? task.taskHasAssignedUsers[0].user.username:'-'}
                         className="md-input"
                  />
            </div>

            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE858;</i></span>
                <label className="uk-text-muted">Start at</label>
                  <input
                         readOnly
                         value={task.startedAt ? task.startedAt.date:'-'}
                         className="md-input"
                  />
            </div>

            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE8B2;</i></span>
                <label className="uk-text-muted">Deadline</label>
                  <input
                         readOnly
                         value={task.deadline ?task.deadline.date:'-'}
                         className="md-input"
                  />
            </div>

            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE5CD;</i></span>
                <label className="uk-text-muted">Closed at</label>
                  <input
                         readOnly
                         value={task.closedAt? task.closedAt.date:'-'}
                         className="md-input"
                  />
            </div>

            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE893;</i></span>
                <label className="uk-text-muted">Tag</label>
                  <input
                         readOnly
                         value={form.tags.map(tag=>{
                                   return <span style={{background:'#'+tag.color}} key={tag.id}>{tag.title}</span>
                               })}
                         className="md-input"
                  />
            </div>


            <Attachment task={task} handleFileDownload={handleFileDownload} />







            <hr />



            {task.taskData.length>0 && task.taskData.map(td=>{

                return (
                          <div key={td.id} className="uk-margin-medium-bottom">
                            <label className="uk-text-muted">{td.taskAttribute.title}</label>
                              <div
                                  style=
                                    {{border:'1px',
                                      borderRadius: '0',
                                      borderStyle:'solid',
                                      padding:'4px 8px 4px 8px',
                                      borderColor:'rgba(0, 0, 0, 0.12)'
                                     }}>
                                     {td.value}
                            </div>
                          </div>
                );
            })}


            {/*{taskAttributes.map(ta=>{*/}
                {/*let name=ta.id;*/}

                {/*let attributeData=null;*/}

                {/*let value=form.task_data.filter((td) => parseInt(td.id, 10) === parseInt(ta.id, 10));*/}
                {/*if(value.length>0){*/}
                    {/*attributeData=value[0];*/}
                    {/*value=value[0].value;*/}

                {/*}else{*/}
                    {/*value='';*/}
                {/*}*/}

                {/*return (*/}
                    {/*<div key={ta.id}>*/}
                        {/*<CustomAttributeInput type={ta.type} customAttribute={ta} title={ta.title} value={value} action={formTaskAttributeChangeHandler} name={name} attributeData={attributeData} />*/}
                    {/*</div>*/}
                {/*)*/}

            {/*})}*/}




        </div>
    );
};

main.propTypes = {
    task: PropTypes.object.isRequired
};

export default main;
