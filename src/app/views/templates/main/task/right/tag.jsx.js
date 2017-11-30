import React from "react";
import { Creatable } from "react-select";

const renderSelectValue = tag => {
  const tagStyle = tag.value.color
    ? {
        backgroundColor: "#" + tag.value.color.replace("#", ""),
        color: "white"
      }
    : {};

  return (
    <div className={"Select-value " + tag.value.value} style={tagStyle}>
      <span
        className="Select-value-icon"
        aria-hidden="true"
        onMouseDown={e => {
          if (!tag.disabled) {
            tag.onRemove(tag.value);
          }
          e.stopPropagation();
        }}
      >
        ×
      </span>
      <span
        className="Select-value-label"
        role="option"
        aria-selected="true"
        id={tag.id}
      >
        {tag.children}
        <span className="Select-aria-only">&nbsp;</span>
      </span>
    </div>
  );
};

const tag = ({ tagValues, setValues, options }) => {
  const values = tagValues.map(value => {
    //najde sa farba z task options tags
    let color = options.filter(option => {
      return value.id == option.value;
    });
    return {
      value: value.id,
      label: value.title,
      color: color.length ? color[0].color : false,
      className: value.title
    };
  });
  return (
    <div className="uk-input-group" style={{ marginTop: "10px" }}>
      {/* <span className="uk-input-group-addon"><i className="material-icons">&#xE893;</i></span> */}
      <label className="uk-text-muted">Tags</label>

      <Creatable
        name="tags"
        className="md-input"
        value={values}
        joinValues={true}
        multi={true}
        options={options}
        onChange={setValues}
        valueComponent={renderSelectValue}
      />
    </div>
  );
};

export default tag;
