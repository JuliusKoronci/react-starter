import React from "react";
import FilterForm from "../../../../components/Main/Filter/FilterForm";
import FilterTasks from "../../../../components/Main/Filter/FilterTasks";
import Modal from "react-modal";

const Filter = props => {
  // console.log(props.columns);

  // console.log(props.modalFilterForm)

  const modalHeader = props.creatingFilter
    ? "Creating filter"
    : "Editing filter";
  const buttonValue = props.creatingFilter ? "Create filter" : "Edit filter";
  const onSubmit = props.creatingFilter
    ? props.newFilterFormSubmit
    : props.modalFilterFormSubmit;

  const header = props.creatingFilter ? "Filter" : props.filter.title;
  const showIsPublicLabel = !props.creatingFilter && props.filter.public;
  // PUBLIC/PRIVATE label sa zobrazi, ak sa nevytvara novy filter
  const filterLabel = !props.creatingFilter ? (
    showIsPublicLabel ? (
      <label>public filter</label>
    ) : (
      <label>private filter</label>
    )
  ) : (
    ""
  );

  //
  //
  // const ModalWindow =()=> {
  //     return <Modal
  //         isOpen={props.modalOpen}
  //         onAfterOpen={props.modalAfterOpen}
  //         onRequestClose={props.modalClose}
  //         closeTimeoutMS={200}
  //         style={modalStyles}
  //         contentLabel="Modal">
  //
  //
  //         <h1>{modalHeader}</h1>
  //
  //         <div className="uk-form-row uk-margin-bottom">
  //             Name of the new filter: <input name="title" type="text" value={props.modalFilterForm.title} className="md-input" onChange={props.modalFilterFormChange} />
  //         </div>
  //
  //         { props.canModifyPublicFilters &&
  //         <div className="uk-form-row uk-margin-bottom">
  //             <label>Public <input type="checkbox" name="public" value={props.modalFilterForm.public} checked={props.modalFilterForm.public} onClick={props.modalFilterFormChange}  /></label></div>}
  //
  //
  //         {props.modalFilterForm.error && <p>{props.modalFilterForm.error}</p>}
  //
  //         <input type="button" className="md-btn md-btn-success md-btn-small md-btn-wave-light waves-effect waves-button waves-light" onClick={onSubmit} value={buttonValue} />
  //
  //     </Modal>
  // };

  return (
    <div className="md-card">
      <div className="md-card-content">
        <div className="uk-margin-bottom" data-uk-margin>
          <h1 className="heading_b">
            {location.pathname === "/filter" ? (
              <i
                className="material-icons md-24"
                style={{ verticalAlign: "top", paddingRight: "12px" }}
              >
                &#xE145;
              </i>
            ) : (
              <i
                className="material-icons md-24"
                style={{ verticalAlign: "top", paddingRight: "12px" }}
              >
                &#xE152;
              </i>
            )}
            {header}
          </h1>

          {filterLabel}
        </div>
        <hr />

        <div
          className="uk-grid uk-grid-divider"
          style={{ position: "relative" }}
          data-uk-grid-margin
        >
          {/*<ModalWindow/>*/}

          <Modal
            isOpen={props.modalOpen}
            onAfterOpen={props.modalAfterOpen}
            onRequestClose={props.modalClose}
            closeTimeoutMS={200}
            contentLabel="Modal"
            className={{
              base: "modal",
              afterOpen: "modal_after-open",
              beforeClose: "modal_before-close"
            }}
            overlayClassName={{
              base: "modalOverlayClass",
              afterOpen: "modalOverlayClass_after-open",
              beforeClose: "modalOverlayClass_before-close"
            }}
          >
            <h1>{modalHeader}</h1>
            <div className="uk-form-row uk-margin-bottom">
              Name of the new filter:{" "}
              <input
                name="title"
                type="text"
                value={props.modalFilterForm.title}
                className="md-input"
                onChange={props.modalFilterFormChange}
              />
            </div>
            {props.canModifyPublicFilters && (
              <div className="uk-form-row uk-margin-bottom">
                <label>
                  Public{" "}
                  <input
                    type="checkbox"
                    name="public"
                    value={props.modalFilterForm.public}
                    checked={props.modalFilterForm.public}
                    onClick={props.modalFilterFormChange}
                  />
                </label>
              </div>
            )}
            {props.modalFilterForm.error && (
              <p>{props.modalFilterForm.error}</p>
            )}
            <input
              type="button"
              className="md-btn md-btn-success md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
              onClick={onSubmit}
              value={buttonValue}
            />
          </Modal>

          <FilterForm {...props} />

          <FilterTasks {...props} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
