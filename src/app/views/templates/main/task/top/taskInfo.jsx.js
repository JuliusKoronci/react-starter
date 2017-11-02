import React, { PropTypes } from "react";
import dateFormat from "../../../../../services/formatedDate";
import Input from "../../../../../forms/Task/Input.form";

const taskInfo = ({ task, canEdit, formInputChangeHandler, form }) => {
  return (
    <div>
      <div className="uk-grid">
        <div className="uk-width-medium-1-2 uk-margin-bottom">
          <h1 >{task.id} : {task.title}</h1>
        </div>
        <div className="uk-width-medium-1-2">
        <p className="uk-text-muted alignright">
          Created: {task.createdBy.email} | {dateFormat(task.createdAt)}
        </p>
        </div>

      </div>


{/*

      {canEdit && (
        <h1>
          {task.id} : {task.title}
        </h1>


        <Input
          fieldName="title"
          className="header_a md-input uk-margin-medium-bottom"
          taskId={task.id}
          form={form}
          formInputChangeHandler={formInputChangeHandler}
          labelInInput={task.id + ":"}
        />

      )}

      {!canEdit && (
        <h1>
          {task.id} {task.title}
        </h1>
      )}
*/}


    </div>
  );
};

taskInfo.propTypes = {
  task: PropTypes.object.isRequired
};

export default taskInfo;
