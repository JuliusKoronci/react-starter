import React, { Component } from "react";
import { Creatable } from "react-select";
import { convertApiStringToDate } from "../../../services/general";

import { Field, change, reduxForm, reset } from "redux-form";
import { connect } from "react-redux";
import FilterFromTimepicker from "./FilterFormTimepicker";
import { renderField, renderMultiselect } from "../../../forms/field.tpl";

class FilterForm extends Component {
  changeRowVisibility = e => {
    let checked = !!e.target.checked;
    let name = e.target.name;
    this.props.dispatch(change("filterForm", name, checked));
  };

  resetForm = e => {
    e.preventDefault();
    this.props.dispatch(reset("filterForm"));
  };

  datePickerClear = name => {
    let fieldName = name + "Radio";
    this.props.dispatch(change("filterForm", fieldName, "timeRange"));

    fieldName = name + ".from";
    this.props.dispatch(change("filterForm", fieldName, ""));
    fieldName = name + ".to";
    this.props.dispatch(change("filterForm", fieldName, ""));
  };

  render() {
    const {
      handleSubmit,
      formError,
      columns,
      filterOptions,
      getFilterTasks,
      saveFilter,
      createFilter,
      deleteFilter
    } = this.props;

    const showPublicField =
      this.props.filter && this.props.canModifyPublicFilters;
    const canDeleteFilter =
      this.props.filter &&
      (this.props.canModifyPublicFilters || !this.props.filter.public);
    const canSaveFilter =
      this.props.filter &&
      (this.props.canModifyPublicFilters || !this.props.filter.public);

    let visibleColumns = columns
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

    // console.log(columns.map(c=>Object.keys(c)[0] +'='+ c[Object.keys(c)[0]]).join(','))

    return (
      <form
        onSubmit={handleSubmit}
        className={
          this.props.filterFormVisible ? "uk-width-medium-1-4" : "hidden"
        }
        id="filterDiv"
      >
<div className={"md-btn-group"}>
        <button
          className="md-btn md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
          onClick={this.resetForm.bind(null)}
        >
          RESET
        </button>

        {canSaveFilter && (
          <button
            className="md-btn md-btn-success md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
            type="submit"
            onClick={saveFilter.bind(null)}
          >
            SAVE
          </button>
        )}

        {this.props.creatingFilter && (
          <button
            className="md-btn md-btn-success md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
            type="submit"
            onClick={createFilter.bind(null)}
          >
            SAVE
          </button>
        )}

        {canDeleteFilter && (
          <button
            className="md-btn md-btn-warning md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
            type="submit"
            onClick={deleteFilter.bind(null)}
          >
            DELETE
          </button>
        )}


        <button
          type="submit"
          className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
          onClick={getFilterTasks.bind(null)}
        >
          APPLY FILTER
        </button>
</div>
        <ul className="md-list md-list-addon">
          {/*{this.props.filter && (*/}
          {false && (
            <div className="uk-margin-top uk-margin-bottom">
              <Field
                name="title"
                type="text"
                validate={[]}
                component={renderField}
                label="Filter Name"
                disabled={!canSaveFilter}
              />
            </div>
          )}

          {/*{showPublicField && (*/}
          {false && (
            <Field
              name="public"
              type="checkbox"
              validate={[]}
              component={renderField}
              label="Is Public?"
            />
          )}

          <div className="uk-margin-bottom">
            <Field
              name="columns.title"
              type="checkbox"
              className="alignright"
              validate={[]}
              component={renderField}
              label="Column"
              defaultChecked={true}
              actions={{ onChange: this.changeRowVisibility.bind(null) }}
            />

            <Field
              name="search"
              type="text"
              validate={[]}
              component={renderField}
              label="Task Name"
            />
          </div>

          <div className="uk-margin-bottom">
            <Field
              name="columns.status"
              type="checkbox"
              className="alignright"
              validate={[]}
              component={renderField}
              label="Column"
              actions={{ onChange: this.changeRowVisibility.bind(null) }}
            />

            <Field
              name="status"
              type="text"
              validate={[]}
              component={renderMultiselect}
              label="Status"
              defaultOptions={filterOptions.status.map(option => {
                return { value: option.id, label: option.title };
              })}
            />
          </div>

          <div className="uk-margin-bottom">
            <Field
              name="columns.project"
              type="checkbox"
              className="alignright"
              validate={[]}
              component={renderField}
              label="Column"
              actions={{ onChange: this.changeRowVisibility.bind(null) }}
            />
            <Field
              name="project"
              type="text"
              validate={[]}
              component={renderMultiselect}
              label="Project"
              defaultOptions={filterOptions.project.map(option => {
                return { value: option.id, label: option.title };
              })}
            />
          </div>

          <div className="uk-margin-bottom">
            <Field
              name="columns.creator"
              type="checkbox"
              className="alignright"
              validate={[]}
              component={renderField}
              label="Column"
              actions={{ onChange: this.changeRowVisibility.bind(null) }}
            />
            <Field
              name="creator"
              type="text"
              validate={[]}
              component={renderMultiselect}
              label="Created"
              defaultOptions={filterOptions.created.map(option => {
                return { value: option.id, label: option.username };
              })}
            />
          </div>

          <div className="uk-margin-bottom">
            <Field
              name="columns.requester"
              type="checkbox"
              className="alignright"
              validate={[]}
              component={renderField}
              label="Column"
              actions={{ onChange: this.changeRowVisibility.bind(null) }}
            />
            <Field
              name="requester"
              type="text"
              validate={[]}
              component={renderMultiselect}
              label="Requester"
              defaultOptions={filterOptions.requester.map(option => {
                return { value: option.id, label: option.username };
              })}
            />
          </div>

          <div className="uk-margin-bottom">
            <Field
              name="columns.company"
              type="checkbox"
              className="alignright"
              validate={[]}
              component={renderField}
              label="Column"
              actions={{ onChange: this.changeRowVisibility.bind(null) }}
            />
            <Field
              name="company"
              type="text"
              validate={[]}
              component={renderMultiselect}
              label="Company"
              defaultOptions={filterOptions.company.map(option => {
                return { value: option.id, label: option.title };
              })}
            />
          </div>

          <div className="uk-margin-bottom">
            <Field
              name="columns.assigned"
              type="checkbox"
              className="alignright"
              validate={[]}
              component={renderField}
              label="Column"
              actions={{ onChange: this.changeRowVisibility.bind(null) }}
            />
            <Field
              name="assigned"
              type="text"
              validate={[]}
              component={renderMultiselect}
              label="Assigned"
              defaultOptions={filterOptions.assigned.map(option => {
                return { value: option.id, label: option.username };
              })}
            />
          </div>

          <div className="uk-margin-bottom">
            <Field
              name="columns.tag"
              type="checkbox"
              className="alignright"
              validate={[]}
              component={renderField}
              label="Column"
              actions={{ onChange: this.changeRowVisibility.bind(null) }}
            />
            <Field
              name="tag"
              type="text"
              validate={[]}
              component={renderMultiselect}
              label="Context"
              defaultOptions={filterOptions.tag.map(option => {
                return { value: option.id, label: option.title };
              })}
            />
          </div>

          <FilterFromTimepicker
            name={"createdTime"}
            label={"Created At"}
            columnVisibilityName={"columns.createdTime"}
            datePickerClear={this.datePickerClear}
            changeRowVisibility={this.changeRowVisibility}
          />
          <FilterFromTimepicker
            name={"startedTime"}
            label={"Started At"}
            columnVisibilityName={"columns.startedTime"}
            datePickerClear={this.datePickerClear}
            changeRowVisibility={this.changeRowVisibility}
          />
          <FilterFromTimepicker
            name={"deadlineTime"}
            label={"Deadline At"}
            columnVisibilityName={"columns.deadlineTime"}
            datePickerClear={this.datePickerClear}
            changeRowVisibility={this.changeRowVisibility}
          />
          <FilterFromTimepicker
            name={"closedTime"}
            label={"Closed At"}
            columnVisibilityName={"columns.closedTime"}
            datePickerClear={this.datePickerClear}
            changeRowVisibility={this.changeRowVisibility}
          />
        </ul>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const filterId = ownProps.params.filterId;
  let filter = state.filter.filter(
    f => parseInt(f.id, 10) === parseInt(filterId, 10)
  );

  let columns = {};
  let visibleColumns = ownProps.columns
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

  if (filter.length > 0) {
    //visible columns
    filter = filter[0];
    if (filter.columns !== null) {
      filter.columns.map(column => {
        columns[column] = true;
      });
    }

    let statuses = filter.filter.status; //.split(',');
    let projects = filter.filter.project;
    let requester = filter.filter.requester;
    let company = filter.filter.company;
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

  if (Object.keys(ownProps.sentValues).length) {
    initialValues = ownProps.sentValues;
  }
  //ak neni konkretny filter
  return { initialValues: { ...initialValues }, enableReinitialize: true };
}

FilterForm = reduxForm({
  form: "filterForm"
})(FilterForm);

export default connect(mapStateToProps)(FilterForm);
