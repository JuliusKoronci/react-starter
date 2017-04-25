import React, {PropTypes} from 'react';

const confirmDeleteButton = ({handleDelete, entityId}) => {
    return (
    <a className="md-btn md-btn-warning" onClick={handleDelete.bind(null, entityId)} >Are you sure?</a>
    );
};

confirmDeleteButton.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    entityId: PropTypes.number.isRequired,
};

export default confirmDeleteButton;