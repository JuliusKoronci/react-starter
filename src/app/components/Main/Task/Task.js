import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/tasks.action';
import * as genActions from '../../../redux/actions/general.action';
import * as settingsActions from '../../../redux/actions/settings.action';
import ViewEditable from '../../../views/templates/main/task/editableTask.jsx';
import ViewCreatable from '../../../views/templates/main/task/creatingTask.jsx';
import configResolver from '../../../../config/configResolver';
import {generateRoute} from '../../../../config/router';
import {entityCreated, entityError, stripEmptyValues} from '../../../services/general';
import {TASK_LIST} from '../../../../api/urls';
import {apiUploadFile} from '../../../../api/api';

class Task extends Component {

    constructor(props, context) {
        super(props, context);



        this.state = {
            saved: false,
            creatingTask: true,
            newTaskTitle: '',

            form: {
                title: '',
                description: '',
                work: '',
                work_time: '',
                company: '',
                requester: '',
                assigned: [],
                project: '',
                started_at:'',
                deadline:'',
                closed_at:'',
                tags:[],
                important:false,
                taskData:[]
            }
            ,

            commentFormBody: '',
            commentFormEmail: false,
            commentFormInternalNote: false,
            commentFormEmailSubject: '',
            commentFormEmailTo: '',
            commentFormEmailCc: '',
            commentFormAttachments: [],
            commentFormErrors: {}
        }

    }

    componentWillUnmount() {
        if (this.props.newTask && !this.state.saved) {
            this._onNewTaskCancel(this.props.params.taskId);
        }
    }

    handleFileUpload = (acceptedFiles) => {
        let formData = new FormData();
        acceptedFiles.map((file) => {
            name = file.name;
            formData.append(file.name, file)
        });

        this.props.actions.taskUpload(formData, this.props.params.taskId);
    };

    handleFileDownload = (slug) => {
        this.props.actions.downloadFile(slug, configResolver.getDownloadFileConfig());
    };

    handleFileDelete = (slug, e) => {
        this.props.actions.deleteFile(slug, configResolver.deleteTaskAttachment(this.props.params.taskId, slug));
        e.preventDefault();
    };

    _onValidate = () => {
        const task = this.props.task;
        console.log(task);

        if (task.taskHasAssignedUsers.length === 0) {
            return false;
        }
        if (task.title.trim() === '') {
            return false;
        }
        if (!task.company && !task.company.id) {
            return false;
        }

        return true;
    };

    _onNewTaskCreate = (taskId) => {
        const path = generateRoute('task_list', {taskId: taskId});
        if (this._onValidate()) {
            this.setState({
                saved: true,
            });
            entityCreated('Task created!', path);
        } else {
            entityError('The following fields are mandatory: Status, Project, Requester, Company, Assigned');
        }
    };
    _onNewTaskCancel = (taskId) => {
        this.props.actions.deleteTask(`${TASK_LIST}/${taskId}`);
    };


    toggleState = (data, e) => {

        e.preventDefault();
        if (data.hasOwnProperty('value')) {
            this.setState({[data.key]: data.value})
        } else {
            this.setState({[data.key]: !this.state[data.key]})
            // this.setState({[data.key]:!e.target.checked})
        }
    };

    formChangeHandler = (e) => {
        const value = e.target.value;
        const targetName = e.target.name;
        this.setState({[targetName]: value});

        console.log(this.state);
    };

    formInputChangeHandler = (name, value, e) => {

        // let obj={form[name]:value};
        console.log('change', name, value);

        if(name==='project'){
            //TODO update assignees
            let config=configResolver.projectAssigners(value);
            this.props.actions.getProjectAssigners(config);
        }

        if(name==='tags'){
            value=value.map(val=>{return {id:val.value,title:val.label}});
        }

        if(name==='assigned'){



            // value.value,
            //     value.label
            //
            // value: tHuser.user.id,
            //     label: tHuser.user.username

        }



        let form = Object.assign({}, this.state.form);
        form[name] = value;
        this.setState({form: form});
        // console.log(this.state);
    };


    saveTask = () => {

        let values=this.state.form;

        values.started_at=this.state.form.started_at&&this.state.form.started_at.date?this.state.form.started_at.date:this.state.form.started_at;
        values.deadline=this.state.form.deadline&&this.state.form.deadline.date?this.state.form.deadline.date:this.state.form.deadline;
        values.closed_at=this.state.form.closed_at&&this.state.form.closed_at.date?this.state.form.closed_at.date:this.state.form.closed_at;

        console.log(this.state.form.started_at)

        // values.tags=this.state.form.tags.map(tag=>{return tag.title;})


        let config = configResolver.taskUpdate(this.props.params.taskId);
        //this.props.actions.patchEntity(values,config,this.props.params.taskId);

        let sendValues=stripEmptyValues(values,false,['started_at','deadline','closed_at']);
        sendValues['started_at']='';
        this.props.actions.taskUpdate(sendValues,config,this.props.params.taskId);

        console.log(values);
    };



    handleCommentFileUpload = (e) => {
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append('file', file);

        let config = configResolver.fileUploadConfig();

        try {
            let response = apiUploadFile(config.url, formData);
            response.then((data) => {
                let att = this.state.commentFormAttachments;
                att.unshift(data.slug);
                this.setState({commentFormAttachments: att});
            });
        } catch (e) {
            console.log(e);
        }


    };

    handleCommentFileDelete = (slug, e) => {
        // this.props.actions.deleteFile(slug, configResolver.deleteTaskAttachment(this.props.params.taskId, slug));
        // e.preventDefault();
    };


    sendComment = () => {
        let values = {};


        if (this.state.commentFormEmail) {
            values = {
                body: this.state.commentFormBody,
                title: this.state.commentFormEmailSubject,
                email_to: this.state.commentFormEmailTo,
                email_cc: this.state.commentFormEmailCc,
                email: true,
                internal: this.state.commentFormInternalNote

            };
        } else {
            values = {
                body: this.state.commentFormBody,
                title: ' ',
                internal: this.state.commentFormInternalNote
            };
        }

        if (this.state.commentFormAttachments.length > 0) {
            values.slug = this.state.commentFormAttachments.join();
        }

        let config = configResolver.addTaskComment(this.props.params.taskId);
        this.props.actions.addTaskComment(values, config);
    };


    newTaskTitleChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({newTaskTitle: value});
    };

    createTaskHandler = (e) => {
        e.preventDefault();
        let config = configResolver.createTask();
        let values = {'title': this.state.newTaskTitle};

        // console.log(this.state.newTaskTitle);
        // this.props.actions.createEntity(values,config);
        this.props.actions.createTask(values, config);
        return false;
    };


    componentWillMount() {

        if (this.props.params.taskId) {
            this.props.actions.loadTaskById(this.props.params.taskId);
            this.props.actions.loadEntityList(configResolver.loadOptionList(this.props.params.taskId));
            this.props.actions.requestTaskAttributes();

            this.setState({'creatingTask': false})
        } else {
            this.setState({'creatingTask': true})
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.task !== this.props.task) {

            // console.log(this.props.task);
            // console.log('did update task component');


            let task=this.props.task;
            if(task){
                // console.log(task);


                
                let form={
                    title: task.title,
                    description: task.description,
                    work: task.work,
                    work_time: task.work_time,
                    company: task.company?task.company.id:null,
                    requester: task.requestedBy?task.requestedBy.id:null,
                    assigned: task.taskHasAssignedUsers? task.taskHasAssignedUsers.map(user=>{return {userId:user.user.id,username:user.user.username}}):[],
                    project: task.project?task.project.id:null,
                    started_at: task.startedAt,
                    deadline: task.deadline,
                    closed_at: task.closedAt,
                    tags: task.tags,
                    important: task.important,
                    taskData: task.taskData,
                };

                console.log(form.assigned,task)

                this.setState({
                    form:form
                });


            }

            if (this.props.params.taskId) {
                this.setState({'creatingTask': false})
            } else {
                this.setState({'creatingTask': true})
            }

            if (!this.state.creatingTask && this.props.params.taskId) {
                this.props.actions.loadEntityList(configResolver.loadOptionList(this.props.params.taskId));
            }

            if (JSON.stringify(prevProps.task.comments) !== JSON.stringify(this.props.task.comments)) {

                this.setState({
                    commentFormBody: '',
                    commentFormEmail: false,
                    commentFormInternalNote: false,
                    commentFormEmailSubject: '',
                    commentFormEmailTo: '',
                    commentFormEmailCc: '',
                    commentFormAttachments: [],
                    commentFormErrors: {}
                });
            }


        }
    }

    render() {
        if (this.props.task && this.props.task.canEdit) {
            return this.renderTask()
        }
        if (this.props.task && !this.props.task.canEdit) {
            return <p>Read only task</p>
        }
        else if (this.props.creatingTask) {
            return this.renderCreatingTask()
        }
        else {
            return <p>Task id: {this.props.params.taskId} ...</p>
        }
    }

    renderCreatingTask = () => {
        return (<ViewCreatable
            saveAction={this.createTaskHandler}
            handleTaskCreate={this._onNewTaskCreate.bind(null, this.props.params.taskId)}
            newTaskTitleChangeHandler={this.newTaskTitleChangeHandler}
            {...this.props}
        />);
    };

    renderTask = () => {
        // console.log(this.props.task);
        return (<ViewEditable
            handleFileUpload={this.handleFileUpload}
            handleFileDownload={this.handleFileDownload}
            handleFileDelete={this.handleFileDelete}
            handleTaskCreate={this._onNewTaskCreate.bind(null, this.props.params.taskId)}
            handleTaskDelete={this._onNewTaskCancel.bind(null, this.props.params.taskId)}

            sendComment={this.sendComment}
            formChangeHandler={this.formChangeHandler}
            formInputChangeHandler={this.formInputChangeHandler}
            toggleState={this.toggleState}
            commentFormEmail={this.state.commentFormEmail}
            commentFormInternalNote={this.state.commentFormInternalNote}
            commentFormBody={this.state.commentFormBody}
            commentFormEmailTo={this.state.commentFormEmailTo}
            commentFormEmailCc={this.state.commentFormEmailCc}
            commentFormEmailSubject={this.state.commentFormEmailSubject}
            commentFormAttachments={this.state.commentFormAttachments}
            handleCommentFileUpload={this.handleCommentFileUpload}

            saveAction={this.saveTask}

            form={this.state.form}
            {...this.props}
        />);
    }
}

Task.propTypes = {
    //myProp: PropTypes.string.isRequired
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    const task = state.tasks.task.data || false;
    let stateToProps = {};

    if (!ownProps.params.taskId) {
        stateToProps = {
            newTaskTitle: state.newTaskTitle,
            task: false,
            user: state.auth.user,
            creatingTask: true
        };
    } else {

        stateToProps = {
            task: task,
            newTask: ownProps.params.newTask,
            options: state.tasks.options,
            canEdit: task ? task.canEdit : false,
            user: state.auth.user,
            creatingTask: false,
            taskAttributes: state.taskAttributes && state.taskAttributes.data?state.taskAttributes.data:[]
        };
    }


    return stateToProps;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...genActions, ...settingsActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
