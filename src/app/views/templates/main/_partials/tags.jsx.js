import React, { PropTypes } from "react";
import Tag from "./tag";

const tagList = ({ task }) => {
  return (
    <p className="uk-margin-remove">
      {task.important && (
        <span
          className="uk-badge uk-badge-danger"
          style={{ margin: "0 0.5em 0 0" }}
        >
          important
        </span>
      )}
      {task.tags.map(tag => <Tag tag={tag} key={tag.id} />)}
    </p>
  );
};

tagList.propTypes = {
  task: PropTypes.object.isRequired
};

export default tagList;
