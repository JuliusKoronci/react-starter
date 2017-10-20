import React, { PropTypes } from "react";
import Status from "./status.jsx";
// import Repeat from './repeat.jsx';
import Attachment from "./attachment.jsx";
import Tag from "./tag.jsx";
import DatePicker from "../../../../../forms/Task/Datepicker.form";
// import Select from "../../../../../forms/Task/Select.form";
import Select from "../../../../../forms/general/Select.form";
// import configResolver from "../../../../../../config/configResolver";
// import ReactSelect from "react-select";
import CustomAttributeInput from "../../../../../forms/general/CustomAttributeInput.form";

const main = ({
  task,
  user,
  actions,
  options,
  handleFileUpload,
  handleFileDownload,
  handleFileDelete,
  formInputChangeHandler,
  formTaskAttributeChangeHandler,
  form,
  taskAttributes,
  statusChange
}) => {
  // console.log(form);
  // console.log("company", options.company);
  // console.log('main');

  // console.log(taskAttributes,taskAttributes1);

  return (
    <div className="md-list md-list-addon">
      <Status
        task={task}
        statuses={options.status}
        user={form.assigned}
        action={statusChange}
      />

      <Select
        label="Project"
        icon="&#xE2C8;"
        // defaultValue={task.project ? task.project.id : ''}
        defaultValue={form.project || ""}
        options={options.project.map(r => {
          return {
            value: r.id,
            label: r.title
          };
        })}
        // action={(e) => {actions.patchEntity(configResolver.updateProject(e.target.value, task.id))}}
        value={form.project}
        name="project"
        action={formInputChangeHandler}
        actiona={e => {
          formInputChangeHandler("project", e.target.value);
        }}
      />

      <Select
        label="Requester"
        icon="&#xE7FD;"
        value={form.requester}
        // defaultValue={task.requestedBy.id || ''}
        defaultValue={form.requester || ""}
        name={"requester"}
        options={options.requester.map(r => {
          return {
            value: r.id,
            label: r.username
          };
        })}
        actiona={e => {
          // actions.patchEntity(configResolver.updateRequester(e.target.value, task.id))
          formInputChangeHandler("requester", e.target.value);
        }}
        action={formInputChangeHandler}
      />
      <Select
        label="Company"
        icon="&#xE7EE;"
        defaultValue={form.company}
        action={e => {
          formInputChangeHandler("company", e.target.value);
        }}
        options={options.company.map(r => {
          return {
            value: r.id,
            label: r.title
          };
        })}
        value={form.company}
        name="company"
        action={formInputChangeHandler}
      />

      <Select
        label="Assigned"
        icon="&#xE7FD;"
        defaultValue={
          form.assigned && form.assigned[0] && form.assigned[0]["userId"]
            ? form.assigned[0]["userId"]
            : ""
        }
        options={options.assigner.map(r => {
          return { value: r.id, label: r.username };
        })}
        value={
          form.assigned && form.assigned[0] && form.assigned[0]["userId"]
            ? form.assigned[0]["userId"]
            : ""
        }
        name="assigned"
        action={formInputChangeHandler}
      />

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

      {/*
            TODO
            */}
      <DatePicker
        taskId={task.id}
        action={formInputChangeHandler}
        value={
          form.started_at && form.started_at.date
            ? form.started_at.date
            : form.started_at
        }
        fieldName="started_at"
        label="Start At"
        icon="&#xE858;"
        formInputChangeHandler={formInputChangeHandler}
      />
      <DatePicker
        taskId={task.id}
        action={formInputChangeHandler}
        value={
          form.deadline && form.deadline.date
            ? form.deadline.date
            : form.deadline
        }
        formInputChangeHandler={formInputChangeHandler}
        fieldName="deadline"
        label="Deadline"
        icon="&#xE8B2;"
      />
      <DatePicker
        taskId={task.id}
        action={formInputChangeHandler}
        value={
          form.closed_at && form.closed_at.date
            ? form.closed_at.date
            : form.closed_at
        }
        formInputChangeHandler={formInputChangeHandler}
        fieldName="closed_at"
        label="Closed At"
        icon="&#xE5CD;"
      />

      <Tag
        tagValues={form.tags}
        options={options.tag.map(tag => {
          return {
            value: tag.id,
            label: tag.title
          };
        })}
        setValues={values => {
          formInputChangeHandler("tags", values);
          // const config = configResolver.addTags(values, task.id);
          // actions.patchEntity(config, config.values);
        }}
      />

      {/*<Repeat/>*/}
      <Attachment
        task={task}
        handleFileUpload={handleFileUpload}
        handleFileDownload={handleFileDownload}
        handleFileDelete={handleFileDelete}
      />

      {taskAttributes.map(ta => {
        let name = ta.id;

        let attributeData = null;

        let value = form.task_data.filter(
          td => parseInt(td.id, 10) === parseInt(ta.id, 10)
        );
        if (value.length > 0) {
          attributeData = value[0];
          value = value[0].value;
        } else {
          value = "";
        }

        // console.log(ta);
        // return(<div>Ca</div>);
        //

        return (
          <div key={ta.id}>
            <CustomAttributeInput
              type={ta.type}
              customAttribute={ta}
              title={ta.title}
              value={value}
              action={formTaskAttributeChangeHandler}
              name={name}
              attributeData={attributeData}
            />
          </div>
        );
      })}
    </div>
  );
};

main.propTypes = {
  task: PropTypes.object.isRequired
};

export default main;
