import React, { PropTypes } from "react";

const taskStatus = ({ task }) => {
  let statuses;

  if (task.taskHasAssignedUsers.length) {
    statuses = task.taskHasAssignedUsers.map((record, i) => {
      return record.status ? (
        <span
          key={i}
          className="uk-badge"
          style={{ background: record.status.color }}
        >
          {record.status.title}
        </span>
      ) : (
        ""
      );
    });
    return <div>{statuses}</div>;
  }
  return null;
};

taskStatus.propTypes = {
  task: PropTypes.object.isRequired
};

export default taskStatus;
