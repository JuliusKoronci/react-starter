import React from 'react';
import TaskActions from './top/taskActionsDisabled.jsx';
import Summary from './left/summaryDisabled.jsx';
import Material from './left/materialDisabled.jsx';
import CommentForm from './left/commentFormDisabled.jsx';
import RightMain from './right/mainDisabled.jsx';
// import NewTaskPannel from './left/newTaskPannel.jsx';
import TaskButtonPanel from './top/taskButtonPanel.jsx';


const creatingTask = (props) => {
	return (
		<div className="md-card-content form-inputs-disabled">

			<div className="uk-form-row">
				{/*{props.newTask && <NewTaskPannel {...props} />}*/}
				<div className="uk-grid" data-uk-grid-margin>


					<TaskButtonPanel saveAction={props.saveAction} />
					<hr />
					<div className="md-input-wrapper md-input-filled">
						<input type="text" className="md-input header_b" style={{fontSize: '22px',lineHeight: '26px'}} value={props.newTaskTitle} placeholder="New task name" autoFocus={true}
							   onChange={props.newTaskTitleChangeHandler.bind(null)} />
						<span className="md-input-bar "/></div>



					{/*<TaskActions {...props} />*/}
				</div>
				<hr />
				<div className="uk-grid uk-grid-divider" data-uk-grid-margin>
					<div className="uk-width-medium-3-4">
						<Summary {...props} />
						<Material {...props} />
						<CommentForm {...props} />
						{/*<CommentList {...props} />*/}
					</div>
					<div className="uk-width-medium-1-4">
						<RightMain {...props} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default creatingTask;
