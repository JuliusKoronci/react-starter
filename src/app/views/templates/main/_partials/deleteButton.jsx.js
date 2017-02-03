import React, {PropTypes} from 'react';

const deleteButton = ({confirmDelete}) => {
    return (
        <button className="md-btn md-btn-danger" onClick={confirmDelete} >Delete</button>
    );
};

deleteButton.propTypes = {
    confirmDelete: PropTypes.func.isRequired,
};

export default deleteButton;