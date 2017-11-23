import React, { Component } from "react";
import { Creatable } from "react-select";
import { convertApiStringToDate } from "../../../services/general";

import { Field, change, reduxForm, reset } from "redux-form";
import { connect } from "react-redux";
import FilterFromTimepicker from "./FilterFormTimepicker";
import withFilter from "../../../containers/Tasks/withFilter";
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
    console.log(this.props);

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
      <div>
        <h2>form</h2>
        <form
          onSubmit={handleSubmit}
          className={
            this.props.filterFormVisible ? "uk-width-medium-1-4" : "hidden"
          }
          id="filterDiv"
        >
          <div className={"md-btn-group"}>
            {canDeleteFilter &&
              !this.props.filter.remembered && (
                <button
                  className="md-btn  md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                  type="submit"
                  onClick={deleteFilter.bind(null)}
                >
                  DELETE
                </button>
              )}

            <button
              className="md-btn md-btn-warning md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
              onClick={
                this.props.filter && this.props.filter.remembered
                  ? e => this.props.resetRememberedFilter(e)
                  : e => this.resetForm(e)
              }
            >
              RESET
            </button>

            {canSaveFilter &&
              !this.props.filter.remembered && (
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
                onClick={e => createFilter()}
              >
                SAVE
              </button>
            )}

            <button
              type="submit"
              className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
              onClick={e => getFilterTasks(e)}
            >
              FILTER
            </button>
          </div>
          <div className="md-list md-list-addon">
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
                  // return { value: option.id, label: option.username };
                  return {
                    value: option.id,
                    label:
                      option.username +
                      (option.name || option.surname ? "  (" : "") +
                      (option.name ? option.name : "") +
                      (option.surname ? " " + option.surname : "") +
                      (option.name || option.surname ? ")" : "")
                  };
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
                  // return { value: option.id, label: option.username };
                  return {
                    value: option.id,
                    label:
                      option.username +
                      (option.name || option.surname ? "  (" : "") +
                      (option.name ? option.name : "") +
                      (option.surname ? " " + option.surname : "") +
                      (option.name || option.surname ? ")" : "")
                  };
                })}
              />
            </div>

            <div className="uk-margin-bottom">
              <Field
                name="columns.taskCompany"
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
                  return {
                    value: option.id,
                    label:
                      option.username +
                      (option.name || option.surname ? "  (" : "") +
                      (option.name ? option.name : "") +
                      (option.surname ? " " + option.surname : "") +
                      (option.name || option.surname ? ")" : "")
                  };
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
                label="Tags"
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
          </div>
        </form>
      </div>
    );
  }
}

FilterForm = reduxForm({
  form: "filterForm"
})(FilterForm);

// export default FilterForm;

export default withFilter(FilterForm);
