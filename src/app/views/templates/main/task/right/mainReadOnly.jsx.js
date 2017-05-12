import React, {PropTypes} from 'react';
import Attachment from './attachmentReadOnly.jsx';


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


            <label className="uk-text-muted" style={{marginLeft: '51px'}}>Status</label>
            <div className="uk-input-group">
                <span className="uk-input-group-addon"><i className="material-icons">&#xE896;</i></span>

                {user} {status}

            </div>




            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE2C8;</i></span>
                <label className="uk-text-muted">Project</label>
                {task.project&& task.project.title?task.project.title:''}
            </div>





            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE7FD;</i></span>
                <label className="uk-text-muted">Requester</label>
                {task.requestedBy && task.requestedBy.username?task.requestedBy.username:'-'}
            </div>



            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE7EE;</i></span>
                <label className="uk-text-muted">Company</label>
                {task.company&&task.company.title?task.company.title:'-'}
            </div>





            <div className="uk-input-group" style={{marginTop: '10px'}}>
                <div className="uk-input-group" style={{marginTop: '20px'}}>
                    <span className="uk-input-group-addon"><i className="material-icons">&#xE7FD;</i></span>
                    <label className="uk-text-muted">Assigned</label>
                    {task.taskHasAssignedUsers.length>0 ? task.taskHasAssignedUsers[0].user.username:'-'}
                </div>
            </div>



            <div className="uk-input-group" style={{marginTop: '10px'}}>
                <div className="uk-input-group" style={{marginTop: '20px'}}>
                    <span className="uk-input-group-addon"><i className="material-icons">&#xE858;</i></span>
                    <label className="uk-text-muted">Start At</label>
                    {task.startedAt ? task.startedAt.date:'-'}
                </div>
            </div>

            <div className="uk-input-group" style={{marginTop: '10px'}}>
                <div className="uk-input-group" style={{marginTop: '20px'}}>
                    <span className="uk-input-group-addon"><i className="material-icons">&#xE8B2;</i></span>
                    <label className="uk-text-muted">Deadline</label>
                    {task.deadline ?task.deadline.date:'-'}
                </div>
            </div>

            <div className="uk-input-group" style={{marginTop: '10px'}}>
                <div className="uk-input-group" style={{marginTop: '20px'}}>
                    <span className="uk-input-group-addon"><i className="material-icons">&#xE5CD;</i></span>
                    <label className="uk-text-muted">Closed At</label>
                    {task.closedAt? task.closedAt.date:'-'}
                </div>
            </div>

            <Attachment task={task} handleFileDownload={handleFileDownload} />


            <div className="uk-input-group" style={{marginTop: '10px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE893;</i></span>
                <label className="uk-text-muted">Tag</label>
                {form.tags.map(tag=>{
                    return <span style={{background:'#'+tag.color}} key={tag.id}>{tag.title}</span>
                })}
            </div>

            <hr />




            <hr />



            {task.taskData.length>0 && task.taskData.map(td=>{

                return  <div key={td.id}><b>{td.taskAttribute.title}</b>
                    <br />
                    {td.value}
                </div>

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