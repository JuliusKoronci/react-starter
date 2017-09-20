import React from "react";
import { Link, browserHistory } from "react-router";

const taskButtonPanel = ({
  saveAction,
  form,
  formInputChangeHandler,
  deleteButton,
  handleTaskDelete,
  handleCancelClick,
  errors
}) => {
  return (
    <div>
      <div className="md-btn-group">
        <button
          onClick={saveAction.bind(null)}
          className="md-btn md-btn-success md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
        >
          <i className="uk-icon-save" />
          SAVE
        </button>

        {/*<a className="md-btn md-btn-warning md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"*/}
        {/*href="#">*/}
        {/*<i className="uk-icon-ban"/>*/}
        {/*CANCEL*/}
        {/*</a>*/}
        <Link
          className="md-btn md-btn-warning md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
          to={"/"}
          onClick={browserHistory.goBack}
        >
          <i className="uk-icon-ban" /> Cancel
        </Link>

        {deleteButton && (
          <a
            className="md-btn md-btn-danger md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
            href="#"
            onClick={handleTaskDelete}
          >
            <i className="uk-icon-ban" />
            DELETE
          </a>
        )}

        {formInputChangeHandler && (
          <a
            className="md-btn md-btn-primary md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
            href="#"
          >
            <i className="uk-icon-print" />
            Print
          </a>
        )}

        {formInputChangeHandler && (
          <button
            onClick={formInputChangeHandler.bind(
              null,
              "important",
              !form.important
            )}
            className={
              "md-btn md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light " +
              (form.important ? " md-btn-important" : "md-btn-default")
            }
            href="#"
          >
            <i className="uk-icon-star-half-empty" />
            Important
          </button>
        )}

        {errors &&
        errors.length > 0 && (
          <div>
            {errors.map(er => {
              return <p key={er}>{er}</p>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default taskButtonPanel;
