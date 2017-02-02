import React, {PropTypes} from 'react';

const deleteButton = ({handleDelete, id}) => {
    return (
        <button className="md-btn md-btn-danger" onClick={handleDelete.bind(null, id)} >Delete</button>
    );
};

deleteButton.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

export default deleteButton;