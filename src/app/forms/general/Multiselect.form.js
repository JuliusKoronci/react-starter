import React, { PropTypes, Component } from "react";
import Select from "react-select";

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

class Multiselect extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { values: {} };
  }

  onChange = values => {
    // this.props.input.onChange(values);
    // console.log('on change ', values);

    let newValue = values.map(value => {
      return value.value;
    });

    let unique = [...new Set(newValue)].join();

    //this.props.input.value+','+value.value;
    this.props.input.onChange(unique);
  };

  newOptionClick = value => {
    console.log("new option click ", value);
    let newValue = this.props.input.value
      ? this.props.input.value + ","
      : "" + value.value;
    this.props.input.onChange(newValue);
  };

  onSetValues = values => {
    console.log("on set values:", values);
  };

  selectValue = value => {
    console.log("select value: ", value);
  };

  render() {
    this.props.input.value += "";
    const values = this.props.input.value.split(",").map(value => {
      if (value !== "") {
        let foundOption = this.props.options.filter(
          option => parseInt(option.value, 10) === parseInt(value, 10)
        );
        let label =
          foundOption && foundOption[0] && foundOption[0]["label"]
            ? foundOption[0]["label"]
            : value;
        let color =
          foundOption && foundOption[0] && foundOption[0]["color"]
            ? foundOption[0]["color"]
            : false;
        return {
          value,
          label,
          color
        };
      }
      return null;
    });

    return (
      <div>
        <input
          type="hidden"
          value={this.props.input.value}
          name={this.props.input.name}
          {...this.props.input}
        />
        <label htmlFor={this.props.input.name}>{this.props.label}</label>
        <Select
          className="md-input"
          value={values}
          isOptionUnique={true}
          joinValues={true}
          multi={true}
          onChange={this.onChange}
          onBlurResetsInput={false}
          options={this.props.options || []}
          setValues={values => {
            console.log("set vals");
            this.onSetValues(values);
          }}
          onNewOptionClick={this.newOptionClick}
          selectValue={this.selectValue}
          valueComponent={renderSelectValue}
        />
      </div>
    );
  }
}

Multiselect.propTypes = {
  fieldName: PropTypes.string,
  defaultValue: PropTypes.string
};

export default Multiselect;
