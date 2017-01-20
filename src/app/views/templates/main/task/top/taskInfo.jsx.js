import React, {PropTypes} from 'react';


const taskInfo = ({task}) => {
    const locale = navigator.language || navigator.userLanguage;
    const createdAt = new Date(task.created_at).toLocaleString(locale, {hour12: false});
    const [d, t] = createdAt.split(',');
    return (
        <div className="uk-width-medium-3-4">
            <input type="text" className="header_b md-input" value="Task name"/>

            <p className="uk-text-muted">
                Created: {task.created_by.email} | {t.substr(0, 6)} {d}
            </p>
        </div>
    );
};

taskInfo.propTypes = {
    task: PropTypes.object.isRequired
};

export default taskInfo;