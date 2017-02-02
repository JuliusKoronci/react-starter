import React, {PropTypes} from 'react';

const deleteButton = ({handleDelete, id}) => {
    return (
        <div>
        <button className="md-btn md-btn-warning" onClick={handleDelete.bind(null, id)} >Are you sure?</button>
        </div>
    );
};

deleteButton.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

export default deleteButton;