import React from "react";

const Tag = ({ tag }) => {
  return (
    <span
      className="uk-badge"
      style={{
        background: tag.color ? "#" + tag.color.replace("#", "") : "",
        margin: "0 0.5em 0 0"
      }}
    >
      {tag.title}
    </span>
  );
};

export default Tag;
