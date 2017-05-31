import React, { PropTypes } from 'react';
import dateFormat from '../../../../../services/formatedDate';
import Input from '../../../../../forms/Task/Input.form';

const taskInfo = ({ task }) => {
	return (
		<div className="uk-width-medium-3-4">
			<p>{task.id}: {task.title}</p>
            <p className="uk-text-muted">
				Created: {task.createdBy.email} | {dateFormat(task.createdAt)}
			</p>
		</div>
	);
};

taskInfo.propTypes = {
	task: PropTypes.object.isRequired
};

export default taskInfo;
