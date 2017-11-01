import React from "react";
import Task from "./taskrow.jsx";
import Pagination from "../_partials/pagination.jsx";

const FilterTasks = props => {
  let columns = props.columns;

  if (props.filter && props.filter.columns && !props.getColumnsFromState) {
    columns = columns.map(column => {
      return {
        [Object.keys(column)[0]]:
          props.filter.columns.indexOf(Object.keys(column)[0]) !== -1
      };
    });
  }

  return (
    <div
      className={
        props.filterFormVisible ? "uk-width-medium-3-4" : "uk-width-medium-4-4"
      }
      id="tasksDiv"
    >
      <a
        className="md-btn md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
        href="javascript:void(0)"
      >
        DELETE
      </a>

      <button
        className="md-btn md-btn-primary md-btn-small"
        type="button"
        id="filterButon"
        value="Hide"
        onClick={props.toggleFilter.bind(null)}
      >
        <span className="menu_icon">
          <i className="material-icons md-color-white">&#xE152;</i>
        </span>
        <span className="menu_title">
          {props.filterFormVisible ? "HIDE" : "SHOW"}
        </span>
      </button>

      <a
        className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
        href="javascript:void(0)"
      >
        BULK ACTION
      </a>

      <div className="uk-overflow-container uk-margin-bottom">
        <table
          className="uk-table uk-table-align-vertical uk-table-nowrap tablesorter tablesorter-altair"
          id="ts_issues"
        >
          <thead>
            <tr>
              <th className="uk-width-1-10 uk-text-center small_col">
                <input type="checkbox" data-md-icheck className="check_all" />
              </th>

              <th className="uk-text-center ">Task ID</th>

              {columns.map((column, i) => {
                let name = Object.keys(column)[0];
                if (
                  column.hasOwnProperty(name) &&
                  typeof column[name] !== "undefined" &&
                  !!column[name]
                ) {
                  return <th key={i}>{name}</th>;
                  {
                    /*return <th key={i}>{props.columns[name].label}</th>;*/
                  }
                }
              })}
            </tr>
          </thead>
          <tbody>
            {props.tasks.data.map((task, i) => {
              return <Task task={task} key={i} index={i} columns={columns} />;
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        links={props.tasks._links}
        total={props.tasks.total}
        page={props.tasks.page}
        loadFunction={props.loadTasksFunction}
      />
    </div>
  );
};

export default FilterTasks;
