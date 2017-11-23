import React, { Component } from "react";
import Select from "react-select";
import DatePicker from "../../forms/Task/Datepicker.form";

class CustomAttributeInput extends Component {
  // constructor(props, context) {
  //     super(props, context);
  // }

  onChange = value => {
    // console.error('changed ',this.props.name,this.props.title,this.props.type);
    this.props.action(this.props.name, value);
  };

  formInputChangeHandler = (name, value) => {
    this.onChange(value);
  };

  onChangeSimpleSelect = value => {
    this.onChange(value.value);
  };

  onChangeSelect = value => {
    let newValue = value
      .map(val => {
        return val.value;
      })
      .join(",");
    this.onChange(newValue);
  };

  onChangeCheck = e => {
    this.onChange(e.target.checked + "");
  };

  render() {
    const { value, type, title, customAttribute } = this.props;
    // console.log(type);
    // console.log(customAttribute);
    let input = type;

    //textovy input
    const textInputs = ["input", "decimal_number", "integer_number"];
    if (textInputs.indexOf(type) !== -1) {
      input = (
        <input
          type="text"
          name={name}
          className="md-input"
          onChange={e => {
            this.onChange(e.target.value);
          }}
          value={value}
        />
      );
    }
    //textarea
    if (type === "text_area") {
      input = (
        <textarea
          name={name}
          className="md-input"
          onChange={e => {
            this.onChange(e.target.value);
          }}
          value={value}
        />
      );
    }
    //date
    if (type === "date") {
      input = (
        <DatePicker
          action={this.formInputChangeHandler}
          value={value}
          fieldName={name}
          label={title}
          icon="false"
          formInputChangeHandler={this.formInputChangeHandler}
        />
      );
    }

    //simple select TODO
    if (type === "simple_select") {
      //   let options = customAttribute.options.split(",").map(option => {
      //     return { value: option, label: option };
      //   });
      let options = Object.keys(customAttribute.options).map(key => {
        return { value: key, label: customAttribute.options[key] };
      });
      // console.log(customAttribute);
      // let options = [];

      // if (customAttribute.options) {
      //   options = customAttribute.options.split(",").map(item => {
      //     return { value: item, label: item };
      //   });
      // }

      input = (
        <Select
          label={title}
          icon="&#xE2C8;"
          defaultValue={value}
          options={options}
          value={value}
          onChange={this.onChangeSimpleSelect}
        />
      );
    }

    //multiselect
    if (type === "multi_select") {
      let selValue = [];
      if (value) {
        selValue = value.split(",").map(val => {
          return { value: val, label: val };
        });
      }

      input = (
        <Select
          label={title}
          icon="&#xE7FD;"
          multi={true}
          value={selValue}
          options={customAttribute.options.split(",").map(option => {
            return { value: option, label: option };
          })}
          onChange={this.onChangeSelect}
        />
      );
    }

    //checkbox
    if (type === "checkbox") {
      // input = <input type="checkbox" checked={(value==='true')} name={name} onChange={this.onChangeCheck}/>;
      input = (
        <label className="uk-text-muted">
          {title}{" "}
          <input
            type="checkbox"
            checked={value === "true"}
            name={name}
            onChange={this.onChangeCheck}
          />
        </label>
      );

      return (
        <div className="uk-input-group" style={{ marginTop: "20px" }}>
          <span className="uk-input-group-addon">
            <i className="material-icons" />
          </span>
          {input}
        </div>
      );
    }

    if (type === "date") {
      return (
        <div className="uk-input-group">
          <span className="uk-input-group-addon">
            <i className="material-icons" />
          </span>{" "}
          {input}
        </div>
      );
    }

    return (
      <div className="uk-input-group" style={{ marginTop: "20px" }}>
        <span className="uk-input-group-addon">
          <i className="material-icons" />
        </span>
        {/*<label className="uk-text-muted">{title} {customAttribute.id}</label>*/}
        <label className="uk-text-muted">{title}</label>

        <div style={{ border: "0px silver solid" }}>{input}</div>
      </div>
    );
  }
}

export default CustomAttributeInput;
