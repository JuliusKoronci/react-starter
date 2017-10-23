import React from "react";
import Modal from "./Modal";

const ModalConfirmDelete = WrappedComponent => {
  return class ModalConfirmDelete extends React.PureComponent {
    state = {
      modalIsOpen: false,
      isInitialized: false,
      title: null,
      onConfirm: null
    };

    openModal = ({ title, onConfirm }) => {
      this.setState({
        title,
        onConfirm,
        modalIsOpen: true,
        isInitialized: true
      });
    };

    closeModal = () => {
      this.setState({ modalIsOpen: false }, this.destroyModal);
    };

    destroyModal = () => {
      this.setState({ isInitialized: false });
    };

    confirm = () => {
      this.closeModal();
      this.state.onConfirm();
    };

    render() {
      const { modalIsOpen, isInitialized } = this.state;
      return (
        <div>
          {(modalIsOpen || isInitialized) && (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={this.closeModal}
              key="Modal"
              title={this.state.title}
            >
              <h1>Are you sure?</h1>
              <button
                onClick={this.confirm}
                className="md-btn md-btn-danger md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
              >
                Delete
              </button>
              <button
                className="md-btn md-btn-warning md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
                onClick={this.closeModal}
              >
                Cancel
              </button>
            </Modal>
          )}
          <WrappedComponent
            key="ModalOriginal"
            {...this.props}
            openConfirmModal={this.openModal}
          />
        </div>
      );
    }
  };
};

export default ModalConfirmDelete;
