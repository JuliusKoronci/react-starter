import React, { PropTypes, Component } from "react";
import { Creatable } from "react-select";

// const renderSelectValue = value => {
//   console.log(value);
//   return <div>CustomValue:{value}</div>;
// };

class Tagger extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { values: {} };
  }

  componentDidUpdate() {
    this.values = this.props.input.value
      .split(",")
      .filter(v => v !== "")
      .map(value => {
        return {
          value: value,
          label: value
        };
      });

    console.log("tagger input value", this.values);
    // this.setState({
    //     values:this.props.input.value?(this.props.input.value.split(',').map(option => {
    //         return {
    //             value: option,
    //             label: option
    //         }
    // })):{}
    // });
  }

  onChange = values => {
    console.log("on change", values);
    // this.props.input.onChange(values);
    // console.log('tagger on change ', values);
    // let newValue = values
    //   .map(value => {
    //     return value.value;
    //   })
    //   .filter(val => val !== "")
    //   .join();
    // this.props.input.onChange(newValue);

    let newValue = values.map(value => {
      return value.value;
    });
    let unique = [...new Set(newValue)].join();
    this.props.input.onChange(unique);
  };

  newOptionClick = value => {
    // console.log("new option click ", value);

    let newValue =
      (this.props.input.value ? this.props.input.value + "," : "") +
      value.value;
    console.log(this.props.input.value, newValue);
    this.props.input.onChange(newValue);

    return newValue;
  };

  render() {
    // const values = this.values;
    // const values = this.props.input.value
    //   .split(",")
    //   .filter(v => v !== "")
    //   .map(value => {
    //     return {
    //       value: value,
    //       label: value
    //     };
    //   });

    let inputValue = Array.isArray(this.props.input.value)
      ? this.props.input.value.join(",")
      : this.props.input.value;
    // this.props.input.value += "";
    const values = inputValue.split(",").map(value => {
      if (value !== "") {
        return {
          value,
          label: value
          // className: value
        };
      }
      return null;
    });

    return (
      <div>
        {/* <input
          type="hidden"
          value={values}
          name={this.props.input.name}
          {...this.props.input}
        /> */}
        <label htmlFor={this.props.input.name}>{this.props.label}</label>
        <Creatable
          className="md-input"
          value={values}
          /*
                     options={this.props.input.value.split(',').map(option => {
                     return {
                     value: option,
                     label: option
                     }})}
                     */

          joinValues={true}
          unique={true}
          multi={true}
          onChange={this.onChange}
          onBlurResetsInput={false}
          //onInputChange={ this.onChange }

          /*
                     {...this.props.input}


                     options={['option1','option2'].map(option => {
                     return {
                     value: option,
                     label: option
                     }
                     })}
                     */

          // setValues={(values) => {
          //     console.log('set vals');
          //     this.onSetValues(values);
          // }}

          sssonNewOptionClick={this.newOptionClick}
          ssselectValue={this.selectValue}
        />
      </div>
    );
  }
}

Tagger.propTypes = {
  fieldName: PropTypes.string,
  defaultValue: PropTypes.string
};

export default Tagger;
