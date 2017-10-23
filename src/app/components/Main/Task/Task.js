import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../redux/actions/tasks.action";
import * as genActions from "../../../redux/actions/general.action";
import * as settingsActions from "../../../redux/actions/settings.action";
import * as systemActions from "../../../redux/actions/system.actions";
import ViewEditable from "../../../views/templates/main/task/editableTask.jsx";
import ViewCreatable from "../../../views/templates/main/task/creatingTask.jsx";
import ViewReadable from "../../../views/templates/main/task/readOnlyTask.jsx";
import configResolver from "../../../../config/configResolver";
// import {generateRoute} from '../../../../config/router';
// import {entityCreated, entityError, stripEmptyValues} from '../../../services/general';
import { TASK_LIST } from "../../../../api/urls";
import { apiUploadFile } from "../../../../api/api";
import { browserHistory } from "react-router";
import texts from "../../../../config/texts";
import { timestampToDate, dateToTimestamp } from "../../../services/general";
import ModalConfirmDelete from "../../common/ModalConfirmDelete";
// import { withTranslate } from "../../../containers/translatable";
// import i18next from "i18next";
// const i18n = require("i18next");

class Task extends Component {
  constructor(props, context) {
    super(props, context);

    // Delete task	View internal note	Edit internal note

    this.state = {
      saved: false,
      creatingTask: true,
      newTaskTitle: "",
      newTaskDescription: "",
      newTaskProject: "",
      newTaskAssigner: [],
      errors: [],
      formChanged: false,

      form: {
        title: "",
        description: "",
        work: "",
        work_time: "",
        company: "",
        requester: "",
        assigned: [],
        project: "",
        started_at: "",
        deadline: "",
        closed_at: "",
        tags: [],
        important: false,
        task_data: []
      },

      commentFormBody: "",
      commentFormEmail: false,
      commentFormInternalNote: false,
      commentFormEmailSubject: "",
      commentFormEmailTo: "",
      commentFormEmailCc: "",
      commentFormAttachments: [],
      commentFormErrors: {}
    };

    this.dirtyHandler = ev => {
      return true;
      // if (this.props.isDirty) {
      if (this.state.formChanged) {
        if (ev) {
          ev.preventDefault();
          return (ev.returnValue = texts.areYouSureToClose);
        } else {
          return false;
        }
      }
    };
  }

  componentWillUnmount() {
    // alert("before");
    // this.dirtyHandler();
    // alert("mid");
    window.removeEventListener("beforeunload", this.dirtyHandler);
    this.props.actions.isDirty(false);
    // return false;
    // alert('after')
  }
  componentDidMount() {
    window.addEventListener("beforeunload", this.dirtyHandler);
    this.props.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave.bind(this)
    );
  }

  routerWillLeave(nextLocation) {
    return true;
    // const dirty = this.props.isDirty;
    const dirty = this.state.formChanged;
    if (dirty) {
      return texts.unsavedInformation;
    }
  }

  handleFileUpload = acceptedFiles => {
    let formData = new FormData();
    acceptedFiles.map(file => {
      name = file.name;
      formData.append(file.name, file);
    });

    this.props.actions.taskUpload(formData, this.props.params.taskId);
  };

  handleFileDownload = (slug, e) => {
    e.preventDefault();
    this.props.actions.downloadFile(
      slug,
      configResolver.getDownloadFileConfig()
    );
  };

  handleFileDelete = (slug, e) => {
    this.props.actions.deleteFile(
      slug,
      configResolver.deleteTaskAttachment(this.props.params.taskId, slug)
    );
    e.preventDefault();
  };

  // _onValidate = () => {
  //     const task = this.props.task;
  //     console.log(task);
  //
  //     if (task.taskHasAssignedUsers.length === 0) {
  //         return false;
  //     }
  //     if (task.title.trim() === '') {
  //         return false;
  //     }
  //     if (!task.company && !task.company.id) {
  //         return false;
  //     }
  //
  //     return true;
  // };
  //
  // _onNewTaskCreate = (taskId) => {
  //     const path = generateRoute('task_list', {taskId: taskId});
  //     if (this._onValidate()) {
  //         this.setState({
  //             saved: true,
  //         });
  //         entityCreated('Task created!', path);
  //     } else {
  //         entityError('The following fields are mandatory: Status, Project, Requester, Company, Assigned');
  //     }
  // };
  _onNewTaskCancel = taskId => {
    this.props.actions.isDirty(false);
    this.setState({ formChanged: false }, e => {
      this.props.actions.deleteTask(`${TASK_LIST}/${taskId}`);
    });

    // e.preventDefault();
  };

  handleCancelClick = e => {
    e.preventDefault();
    browserHistory.goBack();
  };

  statusChange = (data, e) => {
    let form = Object.assign({}, this.state.form);

    let value = [
      {
        userId: data.assigned,
        statusId: data.status ? data.status : null
      }
    ];

    form["assigned"] = value;

    this.props.actions.isDirty(true);
    this.setState({ form: form, formChanged: true });

    // console.log(data);
  };

  toggleState = (data, e) => {
    e.preventDefault();
    if (data.hasOwnProperty("value")) {
      this.setState({ [data.key]: data.value });
    } else {
      this.setState({ [data.key]: !this.state[data.key] });
      // this.setState({[data.key]:!e.target.checked})
    }
  };

  formChangeHandler = e => {
    const value = e.target.value;
    const targetName = e.target.name;
    this.setState({ [targetName]: value });

    // console.log(this.state);
  };

  formTaskAttributeChangeHandler = (name, value, e) => {
    // console.log('change', name, 'value:',value);
    let form = Object.assign({}, this.state.form);

    //form.task_data[name] = {id:name,value:value};

    const isSetInState = !!form.task_data.filter(
      td => parseInt(td.id, 10) === parseInt(name, 10)
    ).length;
    // console.log('is in state:',isSetInState)

    if (isSetInState) {
      form.task_data = form.task_data.map(td => {
        if (parseInt(td.id, 10) === parseInt(name, 10)) {
          return { id: name, value: value };
        }
        return td;
      });
    } else {
      form.task_data.push({ id: name, value: value });
    }

    // form.task_data[name] = value;

    this.setState({ form: form });
    // console.log('form ta change:',name,value);
    // console.log('state:',this.state);
  };

  formInputChangeHandler = (fieldName, value, e) => {
    // let obj={form[name]:value};
    console.log("change", fieldName, "value:" + value);

    let name = fieldName;

    if (name === "project") {
      //TODO update assignees
      let config = configResolver.projectAssigners(value);
      this.props.actions.getProjectAssigners(config);
    }

    if (name === "tags") {
      value = value.map(val => {
        return { id: val.value, title: val.label };
      });
    }

    if (name === "assigned") {
      let statusId = null;
      let options = this.props.options;
      if (options) {
        let status = options.status.filter(status => {
          if (status.title === "new") {
            return status;
          }
        });
        if (status && status.length) {
          statusId = status[0].id;
        }
      }
      // console.log(value);
      // value = [{ userId: value[0].userId, statusId: statusId }];
      value = [{ userId: value, statusId: statusId }];
    }

    let form = Object.assign({}, this.state.form);

    form[name] = value;

    // console.log(value);
    // console.log(name);
    // console.log(form);
    // console.log(form[name]);

    if (name === "started_at" || name === "closed_at" || name === "deadline") {
      // console.log(value)
      // form[name]['date'] = value;
      form[name] = value;
    }

    this.props.actions.isDirty(true);
    this.setState({ form: form, formChanged: true }, console.log(this.state));
  };

  inputChangeHandler = (name, value, e) => {
    // console.log(name,value)

    if (name === "newTaskProject") {
      //TODO update assignees
      let config = configResolver.projectAssigners(value);
      this.props.actions.getProjectAssigners(config);
    }
    this.setState({ [name]: value });
  };

  saveTask = e => {
    let values = Object.assign({}, this.state.form);

    values.started_at =
      this.state.form.started_at && this.state.form.started_at.date
        ? this.state.form.started_at.date
        : this.state.form.started_at;
    values.deadline =
      this.state.form.deadline && this.state.form.deadline.date
        ? this.state.form.deadline.date
        : this.state.form.deadline;
    values.closed_at =
      this.state.form.closed_at && this.state.form.closed_at.date
        ? this.state.form.closed_at.date
        : this.state.form.closed_at;

    // console.log("started at", values.started_at);
    // console.log("deadline", values.deadline);
    // console.log("closed", values.closed_at);
    // console.log("exit");
    // return;

    //TODO - toto upravit s apinou
    if (!values.started_at) {
      values.started_at = "null";
    }
    if (!values.deadline) {
      values.deadline = "null";
    }
    if (!values.closed_at) {
      values.closed_at = "null";
    }
    //TODO ///////////////////////////

    // console.log(this.state.form.started_at)
    // console.log(this.state.form.task_data);

    let config = configResolver.taskUpdate(this.props.params.taskId);
    //this.props.actions.patchEntity(values,config,this.props.params.taskId);

    // let sendValues=stripEmptyValues(values,false,['started_at','deadline','closed_at']);

    let customAttributes = {};
    values.task_data = values.task_data.filter(function(val) {
      if (val) return val;
    });
    // console.debug(values.task_data);
    let sendValues = Object.assign({}, values);
    values.task_data.map(v => {
      customAttributes[v.id] = v.value;
    });
    sendValues.task_data = customAttributes;

    // sendValues['started_at']='';
    this.props.actions.taskUpdate(sendValues, config, this.props.params.taskId);

    this.props.actions.isDirty(false);
    this.setState({ formChanged: false });
    // console.log(values);
  };

  handleCommentFileUpload = e => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);

    let config = configResolver.fileUploadConfig();

    try {
      let response = apiUploadFile(config.url, formData);
      response.then(data => {
        let att = this.state.commentFormAttachments;
        att.unshift(data.slug);
        this.setState({ commentFormAttachments: att });
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
        title: " ",
        internal: this.state.commentFormInternalNote
      };
    }

    if (this.state.commentFormAttachments.length > 0) {
      values.slug = this.state.commentFormAttachments.join();
    }

    let config = configResolver.addTaskComment(this.props.params.taskId);
    this.props.actions.addTaskComment(values, config);
  };

  newTaskTitleChangeHandler = e => {
    const value = e.target.value;
    this.setState({ newTaskTitle: value });
  };

  createTaskHandler = e => {
    let errors = [];
    e.preventDefault();
    let config = configResolver.createTask();
    let values = {
      title: this.state.newTaskTitle,
      description: this.state.newTaskDescription,
      project: this.state.newTaskProject,
      assigned: JSON.stringify(this.state.newTaskAssigner)
      // 'assigned':this.state.newTaskAssigner,
    };
    // console.log(values);
    // console.log(JSON.stringify(this.state.newTaskAssigner));

    if (!values.title) {
      errors.push("Title must be defined");
    }
    if (!values.project) {
      errors.push("Project must be defined");
    }

    if (this.state.newTaskAssigner.length < 1) {
      errors.push("Assigner must be defined");
    }

    if (errors.length === 0) {
      this.props.actions.createTask(values, config);
      return false;
    } else {
      this.setState({ errors: errors });
    }
  };

  componentWillMount() {
    if (this.props.params.taskId) {
      this.props.actions.loadTaskById(this.props.params.taskId);
      this.props.actions.loadEntityList(
        configResolver.loadOptionList(this.props.params.taskId)
      );
      // this.props.actions.requestTaskAttributes();
      this.setState({ creatingTask: false });
    } else {
      // /api/v1/task-bundle/projects/create-tasks
      this.props.actions.loadEntityList(
        configResolver.loadProjectsWhereUserCanAddTask()
      );
      // this.props.actions.loadProjectsWhereUserCanAddTask();
      this.setState({ creatingTask: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('did update');

    if (prevProps.params.taskId !== this.props.params.taskId) {
      // browserHistory.goBack();

      if (this.props.params.taskId) {
        this.props.actions.loadTaskById(this.props.params.taskId);
        this.props.actions.loadEntityList(
          configResolver.loadOptionList(this.props.params.taskId)
        );
        this.setState({ creatingTask: false, errors: [] });
      } else {
        this.props.actions.loadEntityList(
          configResolver.loadProjectsWhereUserCanAddTask()
        );
        this.setState({
          creatingTask: true,
          errors: [],
          newTaskTitle: "",
          newTaskDescription: "",
          newTaskProject: "",
          newTaskAssigner: []
        });
      }
    }

    if (prevProps.task !== this.props.task) {
      // console.log(this.props.task);
      // console.log('did update task component');

      let task = this.props.task;
      if (task) {
        // console.log('timestamp',task.deadline);
        // console.log('to date',timestampToDate(task.deadline));
        // console.log('to timestamp',dateToTimestamp(timestampToDate(task.deadline)));

        // console.log(task);
        let form = {
          title: task.title,
          description: task.description,
          work: task.work,
          work_time: task.work_time,
          company: task.company ? task.company.id : null,
          requester: task.requestedBy ? task.requestedBy.id : null,
          // assigned: task.taskHasAssignedUsers? task.taskHasAssignedUsers.map(user=>{return {userId:user.user.id,username:user.user.username,statusId:user.status?user.status.id:null}}):[],
          assigned: task.taskHasAssignedUsers
            ? task.taskHasAssignedUsers.map(user => {
                return {
                  userId: user.user.id,
                  statusId: user.status ? user.status.id : null
                };
              })
            : [],
          project: task.project ? task.project.id : null,
          started_at: task.startedAt
            ? timestampToDate(task.startedAt)
            : task.startedAt,
          deadline: task.deadline
            ? timestampToDate(task.deadline)
            : task.deadline,
          closed_at: task.closedAt
            ? timestampToDate(task.closedAt)
            : task.closedAt,
          tags: task.tags,
          important: task.important,
          // task_data: task.taskData?task.taskData.map(td=>{return {id:td.taskAttribute.id,value:td.value,fieldId:td.id,data:td}}):[],
          task_data: task.taskData
            ? task.taskData.map(td => {
                return { id: td.taskAttribute.id, value: td.value };
              })
            : []
        };
        // console.log(form.assigned,task)
        // console.log('task data:',form.task_data)

        this.setState({
          form: form
        });
      }

      if (this.props.params.taskId) {
        this.setState({ creatingTask: false });
      } else {
        this.setState({ creatingTask: true });
      }

      if (!this.state.creatingTask && this.props.params.taskId) {
        this.props.actions.loadEntityList(
          configResolver.loadOptionList(this.props.params.taskId)
        );
      }

      if (
        JSON.stringify(prevProps.task.comments) !==
        JSON.stringify(this.props.task.comments)
      ) {
        this.setState({
          commentFormBody: "",
          commentFormEmail: false,
          commentFormInternalNote: false,
          commentFormEmailSubject: "",
          commentFormEmailTo: "",
          commentFormEmailCc: "",
          commentFormAttachments: [],
          commentFormErrors: {}
        });
      }
    }
  }

  render() {
    if (this.props.task) {
      if (
        (this.props.task.loggedUserProjectAcl.indexOf("resolve_task") !== -1 &&
          this.props.task.project.is_active) ||
        this.props.user.userRoleAcl.indexOf("update_all_tasks") !== -1
      ) {
        return this.renderTask();
      }
      if (
        this.props.task.loggedUserProjectAcl.indexOf("resolve_task") === -1 ||
        this.props.task.project.is_active === false
      ) {
        return this.renderReadonlyTask();
      }

      console.log(this.props.task.project.is_active);
      console.log(this.props.task.loggedUserProjectAcl.indexOf("resolve_task"));
      return <p>Task id: {this.props.params.taskId} ... line 480</p>;
    } else if (this.props.creatingTask) {
      return this.renderCreatingTask();
    } else {
      return <p>Task id: {this.props.params.taskId} ... line last</p>;
    }

    // if (this.props.task && this.props.task.loggedUserProjectAcl.indexOf('resolve_task')!==-1 && this.props.task.project.is_active) {
    //     render='editable';
    //     return this.renderTask()
    // }
    // if (this.props.task && this.props.task.loggedUserProjectAcl.indexOf('resolve_task')===-1) {
    //     return this.renderReadonlyTask()
    // }
    // else if (this.props.creatingTask) {
    //     return this.renderCreatingTask()
    // }
    // else {
    //     return <p>Task id: {this.props.params.taskId} ...</p>
    // }
  }

  renderReadonlyTask = () => {
    // console.log(this.props.task);
    // return (<h1>read only</h1>);
    return (
      <ViewReadable
        sendComment={this.sendComment}
        formChangeHandler={this.formChangeHandler}
        formInputChangeHandler={this.formInputChangeHandler}
        formTaskAttributeChangeHandler={this.formTaskAttributeChangeHandler}
        inputChangeHandler={this.inputChangeHandler}
        toggleState={this.toggleState}
        commentFormEmail={this.state.commentFormEmail}
        commentFormInternalNote={this.state.commentFormInternalNote}
        commentFormBody={this.state.commentFormBody}
        commentFormEmailTo={this.state.commentFormEmailTo}
        commentFormEmailCc={this.state.commentFormEmailCc}
        commentFormEmailSubject={this.state.commentFormEmailSubject}
        commentFormAttachments={this.state.commentFormAttachments}
        handleCommentFileUpload={this.handleCommentFileUpload}
        handleFileDownload={this.handleFileDownload}
        form={this.state.form}
        {...this.props}
      />
    );
  };

  renderCreatingTask = () => {
    return (
      <ViewCreatable
        saveAction={this.createTaskHandler}
        // handleTaskCreate={this._onNewTaskCreate.bind(null, this.props.params.taskId)}
        newTaskTitleChangeHandler={this.newTaskTitleChangeHandler}
        newTaskProject={this.state.newTaskProject}
        newTaskAssigner={this.state.newTaskAssigner}
        form={this.state.form}
        inputChangeHandler={this.inputChangeHandler}
        handleCancelClick={this.handleCancelClick}
        errors={this.state.errors}
        {...this.props}
      />
    );
  };

  renderTask = () => {
    // console.log('render');
    // console.log(this.props.task);
    // return(<h1 {...this.props}>task</h1>)

    // console.log(this.props.task.loggedUserProjectAcl.indexOf("delete_task"));

    // console.log(i18next.t("key"), {
    //   resources: "src/config/locales/en/common.json"
    //   // 'src/config/locales'
    // });

    return (
      <ViewEditable
        handleFileUpload={this.handleFileUpload}
        handleFileDownload={this.handleFileDownload}
        handleFileDelete={this.handleFileDelete}
        // handleTaskCreate={this._onNewTaskCreate.bind(null, this.props.params.taskId)}

        handleTaskDeleteQWER={this._onNewTaskCancel.bind(
          null,
          this.props.params.taskId
        )}
        handleTaskDelete={e =>
          this.props.openConfirmModal({
            title: "Deleting task",
            onConfirm: ef => {
              this._onNewTaskCancel(this.props.params.taskId, ef);
            }
          })}
        deleteButton={
          this.props.task.loggedUserProjectAcl.indexOf("delete_task") !== -1
        }
        sendComment={this.sendComment}
        statusChange={this.statusChange}
        formChangeHandler={this.formChangeHandler}
        formInputChangeHandler={this.formInputChangeHandler}
        formTaskAttributeChangeHandler={this.formTaskAttributeChangeHandler}
        inputChangeHandler={this.inputChangeHandler}
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
        // formChanged={this.state.formChanged}
        formChanged={this.props.isDirty}
        form={this.state.form}
        {...this.props}
      />
    );
  };
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
      creatingTask: true,
      userProjects: state.userOptions.projectsWhereUserCanAddTask,
      options: state.tasks.options,
      isDirty: state.system.isDirty
    };
  } else {
    stateToProps = {
      task: task,
      newTask: ownProps.params.newTask,
      options: state.tasks.options,
      canEdit: task ? task.canEdit : false,
      user: state.auth.user,
      creatingTask: false,
      isDirty: state.system.isDirty,

      // taskAttributes: state.taskAttributes && state.taskAttributes.data?state.taskAttributes.data:[],
      taskAttributes: state.tasks.options.taskAttributes
        ? state.tasks.options.taskAttributes
        : []
    };
  }

  return stateToProps;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { ...actions, ...genActions, ...settingsActions, ...systemActions },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalConfirmDelete(Task)
);
