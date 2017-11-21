import React from "react";

const defaultValue = 10;

const PaginationSetter = ({ setPagination, paginationValue }) => {
  const options = [10, 25, 50, 100, "all"];
  return (
    <div>
      set pagination:
      <select onChange={setPagination} value={paginationValue}>
        {options.map(option => (
          <option key={"k-" + option} value={option == "all" ? 999 : option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const PaginationHOC = WrappedComponent => {
  return class PaginationHOC extends React.PureComponent {
    setPagination = e => {
      //TODO spravit to neskor cez redux + ukladat do user settings do api
      // console.log(this.props);
      this.props.actions.setPagination(e.target.value);
      // this.setState({ paginationValue: e.target.value });
    };

    render() {
      // console.log(this.props);
      const paginationValue = this.props.paginationValue
        ? this.props.paginationValue
        : defaultValue;
      return (
        <WrappedComponent
          {...this.props}
          paginationValue={paginationValue}
          paginationSetter={
            <PaginationSetter
              setPagination={this.setPagination}
              paginationValue={paginationValue}
            />
          }
        />
      );
    }
  };
};

export default PaginationHOC;
