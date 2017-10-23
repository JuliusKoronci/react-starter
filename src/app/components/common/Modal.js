import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
// import { withTranslate } from '../../containers/translatable';

const Modal = ({ title, ...props }) => (
  <ReactModal
    isOpen={props.isOpen}
    onRequestClose={props.onClose}
    contentLabel="Modal"
    aria={{
      labelledby: "Modal__title"
    }}
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
    {...props}
  >
    {title && (
      <h1 className="Modal__title" id="Modal__title">
        {title}
      </h1>
    )}
    <div className="Modal__content">{props.children}</div>
    {/* <button className="Modal__close">{props.t('close')}</button> */}
  </ReactModal>
);

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

// export default withTranslate(Modal);
export default Modal;
