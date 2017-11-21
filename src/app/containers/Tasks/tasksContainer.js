import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/tasks.action";
import * as generalActions from "../../redux/actions/general.action";

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  const filterId = ownProps.params.filterId;

  let filter;
  let filterRemembered;
  if (filterId) {
    //ak je definovane id filtru
    filter = state.system.menu.filters.filter(
      filter => parseInt(filter.id, 10) === parseInt(filterId, 10)
    );
    filterRemembered = false;
  } else {
    //ak neni definovane id filtru v adrese, vyfiltruje defaultny filter z reduxu (filter.remembered:true)
    filter = state.system.menu.filters.filter(filter => !!filter.remembered);
    filterRemembered = true;
  }

  const filterOptions = state.filters.options || [];
  const filterFormValues =
    state.form && state.form.filterForm && state.form.filterForm.values
      ? state.form.filterForm.values
      : {};

  //

  const filterOpts = state.filter.filter(f => {
    return f.id === ownProps.params.filterId;
  })[0];

  let heading = "Dashboard";

  if (ownProps.params.projectId && Array.isArray(ownProps.projects)) {
    const project = ownProps.projects.filter(f => {
      return f.id === parseInt(ownProps.params.projectId, 10);
    });

    if (typeof project[0] !== "undefined") {
      heading = project[0]["title"];
    }
  }

  if (ownProps.params.tagId && Array.isArray(ownProps.tags)) {
    const tag = ownProps.tags.filter(f => {
      return f.id === parseInt(ownProps.params.tagId, 10);
    });

    if (typeof tag[0] !== "undefined") {
      heading = tag[0]["title"];
    }
  }

  return {
    tasks: state.tasks,
    filterOpts,
    heading,

    filterFormVisible: state.filterFormVisible,
    filter: filter.length > 0 ? filter[0] : false,
    filterOptions: filterOptions,
    tasks: state.tasks,
    userAcl: state.auth.user.userRoleAcl,
    filterFormValues: filterFormValues,
    filterRemembered
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions, ...generalActions }, dispatch)
  };
}

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) {
//   return {
//       save: propsFromDispatch.dispatchSave(propsFromState.items)
//   };
// };

export default tasksContainer =>
  connect(mapStateToProps, mapDispatchToProps)(tasksContainer);
