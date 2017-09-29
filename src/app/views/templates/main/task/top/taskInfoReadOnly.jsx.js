import React, { PropTypes } from "react";
import dateFormat from "../../../../../services/formatedDate";

const taskInfo = ({ task }) => {
  return (
    <div>
      <div className="uk-grid">
        <div className="uk-width-medium-1-2">
          <label className="uk-text-muted">Task name</label>
        </div>
        <div className="uk-width-medium-1-2">
          <p className="uk-text-muted alignright">
            Created: {task.createdBy.email} | {dateFormat(task.createdAt)}
          </p>
        </div>
      </div>
      <h3>
        {task.id}: {task.title}
      </h3>
    </div>
  );
};

taskInfo.propTypes = {
  task: PropTypes.object.isRequired
};

export default taskInfo;
