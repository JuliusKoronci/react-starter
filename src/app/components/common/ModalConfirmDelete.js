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
              <h2 style={{color:"red", marginTop:"50px"}}>Deletions are final!</h2>
              <div style={{marginTop:55}} className="uk-text-right">
          <button
              className="md-btn md-btn-warning md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
              onClick={this.closeModal}
            >
              Cancel
            </button>
              <button
                onClick={this.confirm}
                className="md-btn md-btn-danger md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
              >
                Delete
              </button>
            </div>
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
