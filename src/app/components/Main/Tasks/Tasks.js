import React, { Component } from "react";
// import View from "./tasks.jsx";
import View from "../../../views/templates/main/tasks/tasklist.jsx";
import TasksHOC from "./TasksHOC";
import tasksContainer from "../../../containers/Tasks/tasksContainer";
import FilterForm from "./FilterForm";
import configResolver from "../../../../config/configResolver";
import { convertDateToApiString } from "../../../services/general";

class Tasks extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      search: "",
      orderBy: "",
      orderDirection: "",
      hasSearch: false,
      canOrder: false
    };

    console.log(props);
  }

  componentDidMount() {
    if (this.props.params.projectId || this.props.params.tagId) {
      this.setState({ hasSearch: true, canOrder: true });
    }

    this.requestTasks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.params !== this.props.params) {
      this.requestTasks();
    }
  }

  requestTasks = () => {
    let options = {
      orderBy: this.state.orderBy
        ? this.state.orderBy + "=>" + this.state.orderDirection
        : "",
      searchText: this.state.search
    };

    if (this.props.params.projectId) {
      this.config = configResolver.tasksConfig(
        "project",
        this.props.params.projectId,
        options
      );
    }
    if (this.props.params.tagId) {
      this.config = configResolver.tasksConfig(
        "tag",
        this.props.params.tagId,
        options
      );
    }

    // this.props.actions.requestTasks(this.config);
  };

  loadTasksFunction = (url, e) => {
    this.props.actions.requestTasksFromUrl(url);
  };

  searchChangeHandler = e => {
    let value = e.target.value;
    this.setState({ search: value }, this.requestTasks);
  };

  orderByChangeHandler = e => {
    let direction = "ASC";
    let orderBy = e.target.getAttribute("data-order-by");
    //change direction
    if (this.state.orderBy === orderBy) {
      if (this.state.orderDirection === "ASC") {
        direction = "DESC";
      }
      if (this.state.orderDirection === "DESC") {
        direction = "ASC";
      }
    }

    this.setState(
      {
        orderBy: orderBy,
        orderDirection: direction
      },
      this.requestTasks
    );

    // this.requestTasks();
  };

  newFilterFormChange = e => {
    const name = e.target.name;
    let value = ""; //e.target.value;

    if (e.target.getAttribute("type") === "checkbox") {
      value = !!e.target.checked;
    } else {
      value = e.target.value;
    }

    let newFilterForm = Object.assign({}, this.state.newFilterForm);
    newFilterForm[name] = value;

    this.setState({ newFilterForm });
  };

  modalFilterFormChange = e => {
    const name = e.target.name;
    let value = ""; //e.target.value;

    if (e.target.getAttribute("type") === "checkbox") {
      value = !!e.target.checked;
    } else {
      value = e.target.value;
    }

    let modalFilterForm = Object.assign({}, this.state.modalFilterForm);
    modalFilterForm[name] = value;

    this.setState({ modalFilterForm });
  };

  modalClose = () => {
    this.setState({ modalOpen: false });
  };

  getFilterTasks = () => {
    // console.log("get filter tasks");
    this.setState({ saveFilter: false });
    this.setState({ submitType: "request-tasks" });
  };

  // saveFilter = () => {
  //     this.setState({saveFilter: true});
  //     this.setState({submitType: 'save'});
  // };

  saveFilterHandler = () => {
    // alert("save filter handler");
    this.setState({ saveFilter: true });
    this.setState({ submitType: "save" });
  };

  createFilterHandler = () => {
    // alert("create filter handler");
    this.setState({ saveFilter: true });
    this.setState({ submitType: "create" });
  };

  // deleteFilterHandler = () => {
  //   this.setState({ submitType: "delete" });
  // };

  deleteFilter = () => {
    let config = configResolver.deleteFilter(this.props.params.filterId);
    this.props.actions.generalRequest(config.data, config);
  };

  createFilter = values => {
    this.setState({ modalOpen: true });
    // console.log(values)

    values.title = "new filter name";
    values.public = false;
    values.order = 0;
    values.icon_class = "&#xE7EF;";

    this.setState({ modalFilterForm: values });
    this.setState({ createFilterFormState: values });

    // let config = configResolver.createFilter(values, false);
    // this.props.actions.generalRequest(config.data, config);
    // this.props.actions.requestTasks(configResolver.loadFilterTasks(values));
  };

  saveFilter = values => {
    this.setState({ modalOpen: true });
    values.title = this.props.filter.title;
    values.public = this.props.filter.public;
    values.order = 0;
    values.icon_class = "&#xE7EF;";
    // console.log(values);
    //         this.setState({modalFilterFormState:values});
    this.setState({ modalFilterForm: values });

    // let config = configResolver.createFilter(values, false);
    // this.props.actions.generalRequest(config.data, config);
    // this.props.actions.requestTasks(configResolver.loadFilterTasks(values));
  };

  saveRememberedFilter = values => {
    // console.log("SAVE REMEMBERED", values);

    values.title = "filter";
    values.icon_class = "&#xE7EF;";
    values.order = 0;
    this.setState({ submitType: "" });
    let config = configResolver.saveRememberedFilter(values);
    this.props.actions.generalRequest(config.data, config);
    this.props.actions.requestTasks(configResolver.loadFilterTasks(values));
  };

  resetRememberedFilter = e => {
    e.preventDefault();
    console.log("RESET REMEMBERED");
    this.setState({ submitType: "" });
    let config = configResolver.resetRememberedFilter();
    this.props.actions.generalRequest(config.data, config);
    this.props.actions.requestTasks(configResolver.tasksConfig());
    this.setState(this.initialState);
  };

  newFilterFormSubmitHandler = () => {
    this.setState({ submitType: "" });
    // const values=Object.assign({},this.state.createFilterFormState,this.state.newFilterForm);
    const values = Object.assign(
      {},
      this.state.createFilterFormState,
      this.state.modalFilterForm
    );

    // console.log(this.state.createFilterFormState);
    // console.log(values);
    // return;

    const newFilter = { a: "a", b: "b" };
    // const newFilter
    if (Object.keys(newFilter).length === 0) {
      this.setState({
        modalFilterForm: Object.assign({}, this.state.modalFilterForm, {
          error: "Filter is empty"
        })
      });
    } else {
      if (values.title !== "") {
        // alert(values.title)
        this.setState({
          modalFilterForm: Object.assign({}, this.state.modalFilterForm, {
            error: false
          })
        });
        // this.setState({newFilterForm:Object.assign({},this.state.newFilterForm,{error:false})});

        let config = configResolver.createFilter(values, false);
        this.props.actions.generalRequest(config.data, config);
        this.props.actions.requestTasks(configResolver.loadFilterTasks(values));
      } else {
        this.setState({
          modalFilterForm: Object.assign({}, this.state.modalFilterForm, {
            error: "provide a title"
          })
        });
      }
    }
  };

  //save filter from modal
  modalFilterFormSubmitHandler = () => {
    this.setState({ submitType: "" });
    const values = Object.assign(
      {},
      this.state.modalFilterFormState,
      this.state.modalFilterForm
    );

    if (values.title !== "") {
      this.setState({
        modalFilterForm: Object.assign({}, this.state.modalFilterForm, {
          error: false
        })
      });

      let config = configResolver.saveFilter(
        values,
        this.props.params.filterId
      );
      this.props.actions.generalRequest(config.data, config);
      this.props.actions.requestTasks(configResolver.loadFilterTasks(values));
      this.setState({ modalOpen: false });
    } else {
      // this.state.sentValues=values;
      this.setState({
        modalFilterForm: Object.assign({}, this.state.modalFilterForm, {
          error: "provide a title"
        })
      });
    }
  };

  /**
   * tu sa bud uklada filter, alebo len requestnu tasky, podla toho, na aky button sa kliklo (kvoli redux formu)
   */
  onSubmit = (oldValues, e) => {
    console.log("SUBMIT TYPE TOP", this.state.submitType);
    if (this.state.submitType && this.state.submitType === "delete") {
      return this.deleteFilter();
    }

    this.setState({ getColumnsFromState: true });

    let values = Object.assign({}, oldValues);

    // MAP DATES
    ["closedTime", "startedTime", "deadlineTime", "createdTime"].map(field => {
      if (values[field + "Radio"] && values[field + "Radio"] === "now") {
        values[field] = this.state.saveFilter ? "TO=now" : "TO%3Dnow";
        // console.log('now',[field]);
      } else {
        //if (values[field]['radio'] === 'timeRange') {
        // values[field]='';

        let from = values[field] ? values[field]["from"] : "";
        let to = values[field] ? values[field]["to"] : "";

        from = convertDateToApiString(from);
        to = convertDateToApiString(to);

        if (
          (typeof from !== "undefined" && from !== "") ||
          (typeof to !== "undefined" && to !== "")
        ) {
          values[field] = this.state.saveFilter
            ? "FROM=" + from + ",TO=" + to
            : "FROM%3D" + from + ",TO&%3D" + to;
        } else {
          values[field] = "";
        }
      }
    });
    console.log(values);
    // return;
    // let columns = this.state.columns.map(column => {
    //   let key = Object.keys(column)[0];
    //   if (
    //     values.columns &&
    //     values.columns.hasOwnProperty(key) &&
    //     typeof column[key] !== "undefined" &&
    //     !!values.columns[key]
    //   ) {
    //     return { [key]: true };
    //   } else {
    //     return { [key]: false };
    //   }
    // });

    // TODO
    let columns = this.props.activeColumns.map(column => {
      let key = Object.keys(column)[0];
      if (
        values.columns &&
        values.columns.hasOwnProperty(key) &&
        typeof column[key] !== "undefined" &&
        !!values.columns[key]
      ) {
        return { [key]: true };
      } else {
        return { [key]: false };
      }
    });
    this.setState({ columns: columns ? columns : [] });

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let newFilterValues = {};

    values.filter = newFilterValues;

    let filterValues = Object.assign({}, values);
    let filterSaveValues = Object.assign({}, values);

    //pre create a save filter - columns to show sa daju do send values
    let columnsToSend = [];
    this.state.columns.map(column => {
      let key = Object.keys(column)[0];
      if (
        values.columns &&
        values.columns.hasOwnProperty(key) &&
        typeof column[key] !== "undefined" &&
        !!values.columns[key]
      ) {
        let value = key;
        if (value == "company") {
          value = "taskCompany";
        }
        columnsToSend.push(value);
      }
    });
    filterSaveValues.columns = columnsToSend.join();

    // console.log("SUBMIT TYPE MID", this.state.submitType);

    //vytvorenie filtra
    if (this.state.submitType && this.state.submitType === "create") {
      return this.createFilter(filterSaveValues, e);
    }

    //ulozenie filtra
    if (this.state.submitType && this.state.submitType === "save") {
      return this.saveFilter(filterSaveValues, e);
    }

    //ulozi sa do state hodnota formularu, aby sa ten chuj neresetol
    this.setState({ sentValues: values });

    if (
      (!this.state.submitType || this.state.submitType == "request-tasks") &&
      ((this.props.filter && this.props.filter.remembered) ||
        !this.props.filter)
    ) {
      //iba request tasks z defaultneho remembered filtra -> ulozi filter
      return this.saveRememberedFilter(filterSaveValues, e);
    }

    this.setState({ submitType: "" });

    this.props.actions.requestTasks(
      configResolver.loadFilterTasks(filterValues)
    );
  };

  toggleFilter = e => {
    this.setState({ filterFormVisible: !this.state.filterFormVisible });
  };

  render() {
    console.log("tasks props", this.props);
    return (
      <div>
        <h2>Tasks</h2>
        {this.props.filterEnabled &&
          this.props.showFilter && (
            <div>
              <h1>Filter</h1>
              <FilterForm
                columns={this.props.columns}
                filterOptions={this.props.filterOptions}
                filterFormVisible={true}
                getFilterTasks={this.getFilterTasks}
                onSubmit={this.onSubmit}
              />
            </div>
          )}
        <div>
          <View
            {...this.props}
            state={this.state}
            loadTasksFunction={this.loadTasksFunction}
            searchChange={this.searchChangeHandler}
            orderByChange={this.orderByChangeHandler}
            searchText={this.state.search}
            orderBy={this.state.orderBy}
            orderDirection={this.state.orderDirection}
            reloadTasks={this.requestTasks}
            hasSearch={this.state.hasSearch}
            canOrder={this.state.canOrder}
          />
        </div>
      </div>
    );
  }
}

export default tasksContainer(TasksHOC(Tasks));
