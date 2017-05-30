import React from 'react';
import TaskInfo from './top/taskInfo.jsx';
import TaskActions from './top/taskActions.jsx';
import Summary from './left/summary.jsx';
import Material from './left/material.jsx';
import CommentForm from './left/commentForm.jsx';
import CommentList from './left/commentList.jsx';
import RightMain from './right/main.jsx';
import NewTaskPannel from './left/newTaskPannel.jsx';
import TaskButtonPanel from './top/taskButtonPanel.jsx';

const editableTask = (props) => {
	// console.log('editable');
	return (
		<div className="md-card-content">
			<div className="uk-form-row">
				{props.newTask && <NewTaskPannel {...props} />}

				<TaskButtonPanel saveAction={props.saveAction} {...props} />
				<hr />

				<div className="uk-grid" data-uk-grid-margin>
					<TaskInfo {...props} />
					<TaskActions {...props} />
				</div>
				<hr />
				<div className="uk-grid uk-grid-divider" data-uk-grid-margin>
					<div className="uk-width-medium-3-4">
						<Summary {...props} />
						<Material {...props} />
						<CommentForm {...props} />
						<CommentList {...props} />
					</div>
					<div className="uk-width-medium-1-4">
						<RightMain {...props} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default editableTask;
