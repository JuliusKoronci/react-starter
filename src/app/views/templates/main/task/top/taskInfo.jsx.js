import React, { PropTypes } from 'react';
import dateFormat from '../../../../../services/formatedDate';
import Input from '../../../../../forms/Task/Input.form';

const taskInfo = ({ task, canEdit, formInputChangeHandler, form }) => {
	return (
		<div className="uk-width-medium-3-4">
			{canEdit && <Input fieldName="title" className="header_b md-input" taskId={task.id} form={form} formInputChangeHandler={formInputChangeHandler} labelInInput={task.id + ':'} />}
			{!canEdit && <p>{task.id} {task.title}</p>}

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
