import React, { Component } from "react";
import { Link } from "react-router";
import { Creatable } from "react-select";
import Select from "react-select";
import ColumnVisible from "../../../views/templates/main/filter/columnVisible.jsx";

import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
  required,
  phone,
  alphanum,
  number
} from "../../../../config/validation";
import {
  renderField,
  renderTagger,
  renderMultiselect
} from "../../../forms/field.tpl";
import DeleteButton from "../../../components/Main/_partials/DeleteButton";
import { generateRoute } from "../../../../config/router";

class FilterForm extends Component {
  render() {
    const { handleSubmit, formError, handleDelete, columns } = this.props;

    console.log("columns", columns);

    // { Object.keys(props.columns).map((key, i)=>{
    //     let name=key;
    //     if(props.columns.hasOwnProperty(name)&& typeof props.columns[name] !== 'undefined' && (!!props.columns[name].visible)) {
    //         return <th key={i}>{props.columns[name].label}</th>;
    //     }
    // })
    // }

    return (
      <form
        onSubmit={handleSubmit}
        className={
          this.props.filterFormVisible ? "uk-width-medium-1-4" : "hidden"
        }
        id="filterDiv"
      >
        <a
          className="md-btn md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
          href="javascript:void(0)"
        >
          CLEAR
        </a>
        <a
          className="md-btn md-btn-success md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
          href="javascript:void(0)"
        >
          SAVE
        </a>
        <button
          type="submit"
          className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
          href="javascript:void(0)"
        >
          FILTER
        </button>

        <ul className="md-list md-list-addon">
          <Field
            name="filter_name"
            type="text"
            validate={[]}
            component={renderField}
            label="Filter Name"
          />

          <Field
            name="columns.title"
            type="checkbox"
            className="alignright"
            validate={[]}
            component={renderField}
            label="Column"
          />
          <Field
            name="title"
            type="text"
            validate={[]}
            component={renderField}
            label="Task Name"
          />

          <Field
            name="columns.status"
            type="checkbox"
            className="alignright"
            validate={[]}
            component={renderField}
            label="Column"
          />
          <Field
            name="status"
            type="text"
            validate={[]}
            component={renderMultiselect}
            label="Status"
            options={[
              { value: "New", label: "New" },
              { value: "Open", label: "Open" },
              { value: "Pending", label: "Pending" },
              { value: "Closed", label: "Closed" }
            ]}
          />

          {/*<ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="status"*/}
          {/*columns={this.props.columns} className="alignright"/>*/}

          {/*<label className="uk_dp_1 uk-text-muted">Status</label>*/}
          {/*/!*Pouzity react-multiselect https://github.com/JedWatson/react-select*!/*/}
          {/*<Creatable name="Status"*/}
          {/*className="md-input"*/}
          {/*joinValues={true}*/}
          {/*multi={true}*/}
          {/*options={[*/}
          {/*{value: 'New', label: 'New'},*/}
          {/*{value: 'Open', label: 'Open'},*/}
          {/*{value: 'Pending', label: 'Pendig'},*/}
          {/*{value: 'Closed', label: 'Closed'},*/}
          {/*]}/>*/}

          <Field
            name="columns.project"
            type="checkbox"
            className="alignright"
            validate={[]}
            component={renderField}
            label="Column"
          />
          <Field
            name="project"
            type="text"
            validate={[]}
            component={renderMultiselect}
            label="Project"
            options={[
              { value: "New", label: "New" },
              { value: "Open", label: "Open" },
              { value: "Pending", label: "Pending" },
              { value: "Closed", label: "Closed" }
            ]}
          />

          <ColumnVisible
            toggleRowVisibility={this.props.toggleRowVisibility}
            name="project"
            columns={this.props.columns}
            className="alignright"
          />

          <label htmlFor="project" className="uk_dp_1 uk-text-muted">
            Project
          </label>
          <Creatable
            name="Project"
            className="md-input"
            joinValues={true}
            multi={true}
            options={[
              {
                value: "Projekty ku ktorym ma pouzivatel pristup",
                label: "Projekty ku ktorym ma pouzivatel pristup"
              }
            ]}
          />

          <ColumnVisible
            toggleRowVisibility={this.props.toggleRowVisibility}
            name="created"
            columns={this.props.columns}
            className="alignright"
          />

          <label className="uk_dp_1 uk-text-muted">Created</label>
          <Creatable
            name="Created"
            className="md-input"
            joinValues={true}
            multi={true}
            options={[
              {
                value: "multiselect+autocomplete pouzivatelia",
                label: "multiselect+autocomplete pouzivatelia"
              }
            ]}
          />

          <ColumnVisible
            toggleRowVisibility={this.props.toggleRowVisibility}
            name="requester"
            columns={this.props.columns}
            className="alignright"
          />

          <label
            htmlFor="kUI_multiselect_basic"
            className="uk_dp_1 uk-text-muted"
          >
            Requester
          </label>
          <Creatable
            name="Requester"
            className="md-input"
            joinValues={true}
            multi={true}
            options={[
              {
                value: "multiselect+autocomplete pouzivatelia",
                label: "multiselect+autocomplete pouzivatelia"
              }
            ]}
          />

          <ColumnVisible
            toggleRowVisibility={this.props.toggleRowVisibility}
            name="company"
            columns={this.props.columns}
            className="alignright"
          />

          <label
            htmlFor="kUI_multiselect_basic"
            className="uk_dp_1 uk-text-muted"
          >
            Company
          </label>
          <Creatable
            name="Company"
            className="md-input"
            joinValues={true}
            multi={true}
            options={[
              {
                value: "multiselect+autocomplete companies",
                label: "multiselect+autocomplete companies"
              }
            ]}
          />

          <ColumnVisible
            toggleRowVisibility={this.props.toggleRowVisibility}
            name="assigned"
            columns={this.props.columns}
            className="alignright"
          />

          <label className="uk_dp_1 uk-text-muted">Assigned</label>
          <Creatable
            name="Assigned"
            className="md-input"
            joinValues={true}
            multi={true}
            options={[
              {
                value: "multiselect+autocomplete pouzivatelia",
                label: "multiselect+autocomplete pouzivatelia"
              }
            ]}
          />

          <ColumnVisible
            toggleRowVisibility={this.props.toggleRowVisibility}
            name="context"
            columns={this.props.columns}
            className="alignright"
          />
          <label className="uk-text-muted">Context</label>
          <Creatable
            name="Context"
            className="md-input"
            joinValues={true}
            multi={true}
            options={[
              { value: "autocomplete context", label: "autocomplete context" }
            ]}
          />

          <div className="uk-grid" data-uk-grid-margin>
            <div className="uk-width-medium-1-2">
              <label className="uk_dp_1 uk-text-muted">Created From:</label>
              <input type="text" className="md-input" />
            </div>

            <div className="uk-width-medium-1-2">
              <label className="uk_dp1 uk-text-muted">To:</label>

              <ColumnVisible
                toggleRowVisibility={this.props.toggleRowVisibility}
                name="created"
                columns={this.props.columns}
                className="alignright"
              />

              <input type="text" className="md-input" />
            </div>
          </div>

          <hr />
          <p className="uk-text-muted">Started at</p>
          <p>
            <input
              type="radio"
              name="radio_demo"
              id="radio_demo_1"
              data-md-icheck
            />
            <label htmlFor="radio_demo_1" className="inline-label">
              Overdue
            </label>
          </p>
          <p>
            <input
              type="radio"
              name="radio_demo"
              id="radio_demo_2"
              data-md-icheck
            />
            <label htmlFor="radio_demo_2" className="inline-label">
              Time range
            </label>
          </p>

          <div className="uk-grid" data-uk-grid-margin>
            <div className="uk-width-medium-1-2">
              <label className="uk_dp_1 uk-text-muted">From:</label>
              <input type="text" className="md-input" />
            </div>
            <div className="uk-width-medium-1-2">
              <label className="uk_dp1 uk-text-muted">To:</label>

              <ColumnVisible
                toggleRowVisibility={this.props.toggleRowVisibility}
                name="started"
                columns={this.props.columns}
                className="alignright"
              />

              <input type="text" className="md-input" />
            </div>
          </div>
          <hr />

          <p className="uk-text-muted">Deadline at</p>
          <p style={{ marginBotton: 0 }}>
            <input
              type="radio"
              name="radio_demo"
              id="radio_demo_1"
              data-md-icheck
            />
            <label htmlFor="radio_demo_1" className="inline-label">
              Overdue
            </label>
          </p>
          <p>
            <input
              type="radio"
              name="radio_demo"
              id="radio_demo_2"
              data-md-icheck
            />
            <label htmlFor="radio_demo_2" className="inline-label">
              Time range
            </label>
          </p>

          <div className="uk-grid" data-uk-grid-margin>
            <div className="uk-width-medium-1-2">
              <label className="uk_dp_1 uk-text-muted">From:</label>
              <input type="text" className="md-input" />
            </div>
            <div className="uk-width-medium-1-2">
              <label className="uk_dp1 uk-text-muted">To:</label>

              <ColumnVisible
                toggleRowVisibility={this.props.toggleRowVisibility}
                name="deadline"
                columns={this.props.columns}
                className="alignright"
              />

              <input type="text" className="md-input" />
            </div>
          </div>
          <hr />

          <div className="uk-grid" data-uk-grid-margin>
            <div className="uk-width-medium-1-2">
              <label className="uk_dp_1 uk-text-muted">Closed From:</label>
              <input type="text" className="md-input" />
            </div>
            <div className="uk-width-medium-1-2">
              <label className="uk_dp1 uk-text-muted">To:</label>

              <ColumnVisible
                toggleRowVisibility={this.props.toggleRowVisibility}
                name="deadline_closed"
                columns={this.props.columns}
                className="alignright"
              />

              <input type="text" className="md-input" />
            </div>
          </div>
          <hr />

          {/*<input type="checkbox" name="checkbox_demo_mercury" id="checkbox_demo_1" data-md-icheck/>*/}
          {/*<label htmlFor="checkbox_demo_1" className="inline-label">Archived</label>*/}

          {/*<hr/>*/}

          {/*<label className="uk_dp_1 uk-text-muted">Custom select 1</label>*/}

          {/*<ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="custom"*/}
          {/*columns={this.props.columns} className="alignright" />*/}

          {/*<Creatable name="Project"*/}
          {/*className="md-input"*/}
          {/*joinValues={true}*/}
          {/*multi={true}*/}
          {/*options={[*/}
          {/*{*/}
          {/*value: 'Projekty ku ktorym ma pouzivatel pristup',*/}
          {/*label: 'Projekty ku ktorym ma pouzivatel pristup'*/}
          {/*},*/}
          {/*]} />*/}

          {/*<label className="uk_dp_1 uk-text-muted">Custom input/text area</label>*/}
          {/*<span className="alignright">*/}
          {/*<label className="uk_dp1 uk-text-muted">Column</label>*/}
          {/*<input type="checkbox" name="checkbox_demo_inline_mercury"*/}
          {/*id="checkbox_demo_inline_1" data-md-icheck/>*/}
          {/*</span>*/}
          {/*<input type="text" className="md-input"/>*/}
        </ul>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // const filterId = ownProps.params.filterId;
  // const filter = state.filters.data.filter((filter) => parseInt(filter.id, 10) === parseInt(filterId, 10));
  //
  // if (filter.length > 0) {
  //     return {
  //         initialValues: filter[0]
  //     };
  // }else {
  //     return{};
  // }
  return {};
}

FilterForm = reduxForm({
  form: "filterFormForm"
})(FilterForm);

export default connect(mapStateToProps)(FilterForm);

// export default FilterForm;
