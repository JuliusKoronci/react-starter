import React, { PropTypes, Component } from "react";
import Select from "react-select";

class SelectAutocomplete extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { values: {} };
  }

  onChange = value => {
    console.log("on change:", value.value);
    this.props.action(this.props.name, value.value);
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
    // console.log("val:", this.props.value, this.props.options);
    let value = this.props.value;
    const options = this.props.options || [];

    return (
      <div className="uk-input-group" style={{ marginBottom: "20px" }}>
        <span className="uk-input-group-addon">
          <i className="material-icons">{this.props.icon}</i>
        </span>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <span className="alignright">
            <label className="uk_dp1 uk-text-muted md-color-light-blue-A700">+ {this.props.label}</label>
         </span>
        {/* <p>{value}</p>
        <p>
          {options.map(option => {
            return option.id + option.title;
          })}
        </p> */}
        <Select
          className="md-input"
          value={value}
          isOptionUnique={true}
          multi={false}
          onChange={this.onChange}
          onBlurResetsInput={false}
          options={options}
          setValues={values => {
            this.onSetValues(values);
          }}
          onNewOptionClick={this.newOptionClick}
          selectValue={this.selectValue}
        />
      </div>
    );
  }
}

SelectAutocomplete.propTypes = {
  fieldName: PropTypes.string
};

export default SelectAutocomplete;
