import React from 'react';


const newTaskPannel = ({ handleTaskCreate, handleTaskDelete }) => (
	<div className="uk-grid">
		<div className="uk-width-medium-4-4">
			<button onClick={handleTaskCreate} className="md-btn md-btn-success">Save</button>
			<a onClick={handleTaskDelete} className="md-btn md-btn-danger">Cancel</a>
			{/*<Link className="md-btn md-btn-danger" to={'/'}>Cancel</Link>*/}
		</div>
	</div>
);

export default newTaskPannel;
