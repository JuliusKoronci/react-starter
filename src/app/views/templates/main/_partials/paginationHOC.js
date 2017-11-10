import React from "react";

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
    state = {
      paginationValue: 10
    };

    setPagination = e => {
      //TODO spravit to neskor cez redux + ukladat do user settings do api
      this.setState({ paginationValue: e.target.value });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          paginationValue={this.state.paginationValue}
          paginationSetter={
            <PaginationSetter
              setPagination={this.setPagination}
              paginationValue={this.state.paginationValue}
            />
          }
        />
      );
    }
  };
};

export default PaginationHOC;
