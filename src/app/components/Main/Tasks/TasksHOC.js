import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ModalConfirmDelete from "../../common/ModalConfirmDelete";
import configResolver from "../../../../config/configResolver";

const TasksHOC = WrappedComponent => {
  return class TasksHOC extends React.PureComponent {
    constructor(props, context) {
      super(props, context);

      console.log(props);

      this.filterConfig = configResolver.filterConfig(props.params.filterId);
      this.filterOptionsConfig = configResolver.loadFilterOptionList();
      this.filterTasksConfig = configResolver.loadFilterTasks();
      this.canModifyPublicFilters =
        props.userAcl && props.userAcl.indexOf("share_filters") !== -1;

      this.allColumns = [
        "title",
        "requester",
        "project",
        "assigned",
        "status",
        "creator",
        "taskCompany",
        "tag",
        "createdTime",
        "startedTime",
        "deadlineTime",
        "closedTime"
      ];

      this.activeColumns = [
        "title",
        "requester",
        "project",
        "assigned",
        "status"
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
        columns: this.activeColumns,

        filterEnabled: true,
        showFilter: true
      };

      this.state = this.initialState;
    }

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
            const columnValue =
              this.props.filter.columns.indexOf(Object.keys(column)[0]) !== -1;

            visibleColumnsFromFilter.push({ [columnKey]: columnValue });
          });

          this.setState({ columns: visibleColumnsFromFilter });

          // console.log(visibleColumnsFromFilter);
        } else {
          this.setState({
            columns: this.defaultColumns
          });
        }

        // console.log("filter:", this.props.filter);
        // let requestTasksConfig = this.props.params.filterId
        let requestTasksConfig =
          this.props.filter && this.props.filter.id
            ? configResolver.tasksConfig("filter", this.props.filter.id)
            : configResolver.tasksConfig();

        this.props.actions.requestTasks(requestTasksConfig);
      }
    }

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

    componentDidMount() {
      let requestTasksConfig = this.props.params.filterId
        ? configResolver.tasksConfig("filter", this.props.params.filterId)
        : configResolver.tasksConfig();
      this.props.actions.requestTasks(requestTasksConfig);
    }

    render() {
      return (
        <div>
          <WrappedComponent {...this.props} {...this.state} />
        </div>
      );
    }
  };
};

// export default ModalConfirmDelete(TasksHOC);

export default TasksHOC;
