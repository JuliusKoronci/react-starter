import React, { PropTypes } from "react";
import dateFormat from "../../../../../services/formatedDate";
import { timestampToDateString } from "../../../../../services/general";
import Input from "../../../../../forms/Task/Input.form";
import TagList from "../../_partials/tags.jsx";

const taskInfo = ({ task, canEdit, formInputChangeHandler, form }) => {
  const createdAtDate = timestampToDateString(task.createdAt);
  const startedAtDate = timestampToDateString(task.startedAt);
  // console.log(task.startedAt, startedAtDate);

  return (
    <div>
      <div className="uk-grid">
        <div className="uk-width-medium-1-2">
          <label className="uk-text-muted">Task name</label>
        </div>
        <div className="uk-width-medium-1-2">
          <p className="uk-text-muted alignright">
            Created: {task.createdBy.email} | {createdAtDate}
          </p>
        </div>
      </div>
      {canEdit && (
        <Input
          fieldName="title"
          className="md-input uk-margin-medium-bottom header_a"
          taskId={task.id}
          form={form}
          formInputChangeHandler={formInputChangeHandler}
          labelInInput={task.id + ":"}
        />
      )}
      {!canEdit && (
        <p>
          {task.id} {task.title}
        </p>
      )}
      {/* <div style={{ marginTop: "-2em", marginBottom: "1em" }}>
        <TagList task={{ tags: form.tags }} />
      </div> */}
    </div>
  );
};

taskInfo.propTypes = {
  task: PropTypes.object.isRequired
};

export default taskInfo;
