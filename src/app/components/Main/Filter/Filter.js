import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/tasks.action";
import * as generalActions from "../../../redux/actions/general.action";
import configResolver from "../../../../config/configResolver";
import { convertDateToApiString } from "../../../services/general";
import ModalConfirmDelete from "../../common/ModalConfirmDelete";

import View from "../../../views/templates/main/filter/filter.jsx";

class Filter extends Component {
  constructor(props, context) {
    super(props, context);

    // console.log(props.userAcl)
    // share_filters

    this.filterConfig = configResolver.filterConfig(props.params.filterId);
    this.filterOptionsConfig = configResolver.loadFilterOptionList();
    this.filterTasksConfig = configResolver.loadFilterTasks();
    this.canModifyPublicFilters = props.userAcl.indexOf("share_filters") !== -1;
    // console.log('can modify',props.userAcl.indexOf('share_filters'));

    this.defaultColumns = [
      { title: true },
      { requester: true },
      { project: true },
      { assigned: true },
      { status: true },

      { creator: false },
      { taskCompany: false },
      { tag: false },
      // {owner: false},
      { createdTime: false },
      { startedTime: false },
      { deadlineTime: false },
      { closedTime: false }
    ];

    this.initialState = {
      modalFilterForm: {
        title: "",
        public: false,
        error: false
      },
      createFilterFormState: {},
      saveFilterFormState: {},

      modalOpen: false,
      creatingFilter: !props.params.filterId,
      filterFormVisible: props.formVisible || true,
      sentValues: {},

      getColumnsFromState: false,
      columns: this.defaultColumns
    };

    this.state = this.initialState;
  }

  // componentWillReceiveProps(nextProps){
  componentDidUpdate(prevProps) {
    if (prevProps.params.filterId !== this.props.params.filterId) {
      // this.forceUpdate();

      this.setState({
        modalFilterForm: {
          title: "",
          public: false,
          error: false
        },
        createFilterFormState: {},
        saveFilterFormState: {},
        modalOpen: false,
        creatingFilter: !this.props.params.filterId,
        submitType: ""
      });

      // ak je definovany filter a ma columns, nacitaju sa do stateu
      if (this.props.filter && this.props.filter.columns) {
        let visibleColumnsFromFilter = [];
        this.state.columns.forEach(column => {
          let columnKey = Object.keys(column)[0];
          //   if (columnKey == "company") {
          //     columnKey = "taskCompany";
          //   }
          const columnValue =
            this.props.filter.columns.indexOf(Object.keys(column)[0]) !== -1;

          //   if (columnKey == "taskCompany") {
          //     columnKey = "company";
          //   }

          visibleColumnsFromFilter.push({ [columnKey]: columnValue });
        });

        this.setState({ columns: visibleColumnsFromFilter });

        // console.log(visibleColumnsFromFilter);
      } else {
        this.setState({
          columns: this.defaultColumns
        });
      }

      let requestTasksConfig = this.props.params.filterId
        ? configResolver.tasksConfig("filter", this.props.params.filterId)
        : configResolver.tasksConfig();
      this.props.actions.requestTasks(requestTasksConfig);
    }
  }

  loadTasksFunction = (url, e) => {
    this.props.actions.requestTasksFromUrl(url);
  };

  componentWillMount() {
    //ak je vybraty konkretny filter a neni v reduxe, tak sa natiahne
    if (this.props.params.filterId && !this.props.filter) {
      // alert('loading');
      this.props.actions.loadEntityById(
        this.props.params.filterId,
        this.filterConfig
      );
    }

    this.props.actions.loadEntityList(this.filterOptionsConfig);
    this.props.actions.loadEntityList(this.filterTasksConfig);

    //else{alert('not loading')}
  }

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
    // console.log(this.setState)
    this.setState({ saveFilter: false });
  };

  // saveFilter = () => {
  //     this.setState({saveFilter: true});
  //     this.setState({submitType: 'save'});
  // };

  saveFilterHandler = () => {
    this.setState({ saveFilter: true });
    this.setState({ submitType: "save" });
  };

  createFilterHandler = () => {
    this.setState({ saveFilter: true });
    this.setState({ submitType: "create" });
  };

  deleteFilterHandler = () => {
    this.setState({ submitType: "delete" });
    // alert('deleting filter')
  };

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

  newFilterFormSubmitHandler = () => {
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

  modalFilterFormSubmitHandler = () => {
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

  // tu sa bud uklada filter, alebo len requestnu tasky, podla toho, na aky button sa kliklo (kvoli redux formu)
  onSubmit = (oldValues, e) => {
    if (this.state.submitType && this.state.submitType === "delete") {
      return this.deleteFilter();
    }

    this.setState({ getColumnsFromState: true });

    let values = Object.assign({}, oldValues);

    // console.log('save?',this.state.saveFilter);
    // console.log('values:', values);

    // MAP DATES
    ["closedTime", "startedTime", "deadlineTime", "createdTime"].map(field => {
      // console.log(field,values[field+'Radio'],values[field]);

      if (values[field + "Radio"] && values[field + "Radio"] === "now") {
        values[field] = this.state.saveFilter ? "TO=NOW" : "TO%3DNOW";
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
      // this.setState({sentValues:})
      // values[field+'Radio']='TO=NOW'
    });

    let columns = this.state.columns.map(column => {
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

    // console.log('values filter',values.filter)
    // if (values.filter) {
    //     console.log('iterating values')
    //     Object.keys(values.filter).map((key) => {
    //         console.log('iteration',values.filter[key]);
    //         if ((values.filter.hasOwnProperty(key) && typeof values.filter[key] !== 'undefined' && values.filter[key] !== '' && values.filter[key])) {
    //             newFilterValues[key] = values.filter[key];
    //         }
    //     });
    // }

    // console.log(newFilterValues)
    // console.log('values',values)

    values.filter = newFilterValues;

    // console.log('values',values);

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

    //vytvorenie filtra
    if (this.state.submitType && this.state.submitType === "create") {
      return this.createFilter(filterSaveValues, e);
    }

    //ulozenie filtra
    if (this.state.submitType && this.state.submitType === "save") {
      return this.saveFilter(filterSaveValues, e);
    }

    //ulozenie existujuceho filtra
    if (this.state.submitType && this.state.submitType === "save") {
      let config = configResolver.saveFilter(
        filterSaveValues,
        this.props.params.filterId
      );
      this.props.actions.generalRequest(config.data, config);
    } else {
      //ulozi sa do state hodnota formularu, aby sa ten chuj neresetol
      // console.log('set sent values');
      this.setState({ sentValues: values });
    }

    this.props.actions.requestTasks(
      configResolver.loadFilterTasks(filterValues)
    );
  };

  componentDidMount() {
    let requestTasksConfig = this.props.params.filterId
      ? configResolver.tasksConfig("filter", this.props.params.filterId)
      : configResolver.tasksConfig();
    this.props.actions.requestTasks(requestTasksConfig);
  }

  toggleFilter = e => {
    this.setState({ filterFormVisible: !this.state.filterFormVisible });
  };

  render() {
    // console.log(!!this.filter && this.filter.columns);
    // console.log(this.state.columns);
    // console.log('creating filter? ',this.state.creatingFilter);

    return (
      <View
        {...this.props}
        creatingFilter={this.state.creatingFilter}
        sentValues={this.state.sentValues}
        toggleFilter={this.toggleFilter}
        filterFormVisible={this.state.filterFormVisible}
        toggleRowVisibility={this.toggleRowVisibility}
        visibleFields={this.state.visibleFields}
        columns={
          this.filter && this.filter.columns
            ? this.filter.columns
            : this.state.columns
        }
        onSubmit={this.onSubmit}
        loadTasksFunction={this.loadTasksFunction}
        getFilterTasks={this.getFilterTasks}
        ex_deleteFilter={this.deleteFilterHandler}
        deleteFilter={e =>
          this.props.openConfirmModal({
            title: "Deleting filter",
            onConfirm: ef => {
              this.deleteFilter();
            }
          })}
        saveFilter={this.saveFilterHandler}
        createFilter={this.createFilterHandler}
        canModifyPublicFilters={this.canModifyPublicFilters}
        getColumnsFromState={this.state.getColumnsFromState}
        modalOpen={this.state.modalOpen}
        modalClose={this.modalClose}
        modalAfterOpen={e => {}}
        // modalFilterForm={this.state.modalFilterForm}
        // modalFilterForm={this.state.creatingFilter?this.state.newFilterForm:this.state.modalFilterForm}
        // modalFilterFormChange={this.state.creatingFilter?this.newFilterFormChange:this.modalFilterFormChange}
        modalFilterForm={this.state.modalFilterForm}
        modalFilterFormChange={this.modalFilterFormChange}
        // newFilterFormChange={this.newFilterFormChange}
        newFilterFormSubmit={this.newFilterFormSubmitHandler}
        modalFilterFormSubmit={this.modalFilterFormSubmitHandler}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const filterId = ownProps.params.filterId;

  const filter = state.system.menu.filters.filter(
    filter => parseInt(filter.id, 10) === parseInt(filterId, 10)
  );
  const filterOptions = state.filters.options || [];
  const filterFormValues =
    state.form && state.form.filterForm && state.form.filterForm.values
      ? state.form.filterForm.values
      : {};

  return {
    filterFormVisible: state.filterFormVisible,
    filter: filter.length > 0 ? filter[0] : false,
    filterOptions: filterOptions,
    tasks: state.tasks,
    userAcl: state.auth.user.userRoleAcl,
    filterFormValues: filterFormValues
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions, ...generalActions }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalConfirmDelete(Filter)
);
