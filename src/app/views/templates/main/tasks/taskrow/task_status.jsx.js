import React, {PropTypes} from 'react';

const taskStatus = ({task}) => {
    return (
        <div>
            {task.startedAt && !task.closedAt && <span className="uk-badge uk-badge-open">OPEN</span>}
            {!task.startedAt && <span className="uk-badge uk-badge-open">NOT STARTED</span>}
            {task.closedAt && <span className="uk-badge uk-badge-open">CLOSED</span>}
        </div>
    )
};

export default taskStatus;