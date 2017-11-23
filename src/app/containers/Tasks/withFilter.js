import React from "react";
import { connect } from "react-redux";
import { convertApiStringToDate } from "../../services/general";

function mapStateToProps(state, ownProps) {
  const filterId =
    ownProps.params && ownProps.params.filterId
      ? ownProps.params.filterId
      : null;
  // let filter = state.system.menu.filters.filter(
  //   filter => parseInt(filter.id, 10) === parseInt(filterId, 10)
  // );

  let filter = ownProps.filter;
  //temp
  if (filter) {
    filter = [filter];
  }

  let columns = {};
  let visibleColumnsFromProps = ownProps.columns ? ownProps.columns : [];
  let visibleColumns = visibleColumnsFromProps
    .map(column => {
      let key = Object.keys(column)[0];
      if (
        column.hasOwnProperty(key) &&
        typeof column[key] !== "undefined" &&
        !!column[key]
      ) {
        return key;
      }
    })
    .filter(el => {
      return el !== undefined;
    });

  if (filter && filter[0] && !Object.keys(columns).length) {
    visibleColumns = filter[0].columns;
    if (visibleColumns === null) {
      visibleColumns = [];
    }
  }

  visibleColumns.map(vColumn => {
    columns[vColumn] = true;
  });

  let initialValues = { filter: {} };
  initialValues.columns = columns ? columns : "";

  let timePickers = [
    "createdTime",
    "startedTime",
    "deadlineTime",
    "closedTime"
  ];

  timePickers.map(picker => {
    initialValues[picker + "Radio"] = "timeRange";
  });

  if (filter && filter.length > 0) {
    //visible columns
    filter = filter[0];
    if (filter.columns !== null) {
      filter.columns.map(column => {
        let columnKey = column;
        columns[columnKey] = true;
      });
    }

    let statuses = filter.filter.status;
    let projects = filter.filter.project;
    let requester = filter.filter.requester;
    let company = filter.filter.taskCompany;
    let creator = filter.filter.creator;
    let assigned = filter.filter.assigned;
    let tag = filter.filter.tag;
    let search = filter.filter.search;

    initialValues.status = statuses ? statuses : "";
    initialValues.project = projects ? projects : "";
    initialValues.requester = requester ? requester : "";
    initialValues.company = company ? company : "";
    initialValues.creator = creator ? creator : "";
    initialValues.assigned = assigned ? assigned : "";
    initialValues.tag = tag ? tag : "";
    initialValues.search = search ? search : "";

    // console.log('filter initial values:',initialValues);

    timePickers.map(picker => {
      initialValues[picker] = {};
      initialValues[picker + "Radio"] = "timeRange";

      if (filter.filter[picker] && filter.filter[picker] === "TO=NOW") {
        initialValues[picker + "Radio"] = "now";
      } else if (
        filter.filter[picker] &&
        filter.filter[picker].split().length > 0
      ) {
        initialValues[picker + "Radio"] = "timeRange";
        initialValues[picker].from = convertApiStringToDate(
          filter.filter[picker] && filter.filter[picker].split(",")[0]
            ? filter.filter[picker].split(",")[0]
            : ""
        );
        initialValues[picker].to = convertApiStringToDate(
          filter.filter[picker] && filter.filter[picker].split(",")[1]
            ? filter.filter[picker].split(",")[1]
            : ""
        );
      }
    });

    return {
      initialValues: { ...filter, ...initialValues },
      enableReinitialize: true
    };
  }

  if (ownProps.sentValues && Object.keys(ownProps.sentValues).length) {
    initialValues = ownProps.sentValues;
  }
  //ak neni konkretny filter
  return { initialValues: { ...initialValues }, enableReinitialize: true };
}

// FilterForm = reduxForm({
//   form: "filterForm"
// })(FilterForm);

export default withFilter => connect(mapStateToProps)(withFilter);
