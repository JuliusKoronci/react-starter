import React, { Component, PropTypes } from "react";

class MaterialForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      name: {
        value: "",
        error: ""
      },
      quantity: {
        value: "",
        error: ""
      },
      unit: {
        value: "",
        error: ""
      },
      price: {
        value: "",
        error: ""
      }
    };
  };

  handleChange = (type, e) => {
    this.setState({
      [type]: {
        value: e.target.value,
        error: ""
      }
    });
  };

  handleSubmit = () => {
    const { name, quantity, unit, price } = this.state;
    let error = false;
    if (!name.value) {
      name.error = "md-input-danger";
      error = true;
    }
    if (!quantity.value || isNaN(parseFloat(quantity.value))) {
      quantity.error = "md-input-danger";
      error = true;
    } else {
      quantity.value = parseFloat(quantity.value);
    }

    if (!unit.value) {
      unit.error = "md-input-danger";
      error = true;
    }

    if (!price.value || isNaN(parseFloat(quantity.value))) {
      price.error = "md-input-danger";
      error = true;
    } else {
      price.value = parseFloat(price.value);
    }

    if (error) {
      this.setState({
        name,
        quantity,
        unit,
        price
      });

      return;
    }
    this.props.addMaterial(this.props.task.id, {
      name,
      quantity,
      unit,
      price
    });

    this.setState(this.getInitialState());
  };

  render() {
    const { name, quantity, unit, price } = this.state;
    return (
      <tr>
        <td>
          <input
            type="text"
            id="table-item"
            onChange={this.handleChange.bind(null, "name")}
            value={name.value}
            className={"md-input " + name.error}
          />
        </td>
        <td>
          <input
            type="text"
            id="table-item"
            onChange={this.handleChange.bind(null, "quantity")}
            value={quantity.value}
            className={"md-input " + quantity.error}
          />
        </td>
        <td>
          <select
            onChange={this.handleChange.bind(null, "unit")}
            value={unit.value}
            id="table-item"
            className={"md-input " + unit.error}
          >
            <option value="">Select...</option>
            {this.props.options.map((option, i) => {
              return (
                <option key={i} value={option.id}>
                  {option.shortcut}
                </option>
              );
            })}
          </select>
        </td>
        <td>
          <input
            type="text"
            id="table-item"
            onChange={this.handleChange.bind(null, "price")}
            value={price.value}
            className={"md-input " + price.error}
          />
        </td>
        <td>
          <div className="uk-width-medium-1-6">
            <a
              id="table-item"
              onClick={this.handleSubmit}
              className="md-btn md-btn-flat md-btn-flat-primary md-btn-wave"
            >
              Add
            </a>
          </div>
        </td>
      </tr>
    );
  }
}

MaterialForm.propTypes = {
  addMaterial: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired
};

export default MaterialForm;
