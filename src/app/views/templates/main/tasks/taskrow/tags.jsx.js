import React, {PropTypes} from 'react';

const tagList = ({task}) => {
    return (
        <p className="uk-margin-remove">
            {/*<span className="uk-badge uk-badge-success">major</span>*/}
            {/*<span className="uk-badge uk-badge-warning">critical</span>*/}
            {/*<span className="uk-badge uk-badge-info">minor</span>*/}
            {task.important && <span className="uk-badge uk-badge-danger">important</span>}
        </p>
    )
};

tagList.propTypes = {
    task: PropTypes.object.isRequired
};

export default tagList;