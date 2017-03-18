import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions/tasks.action';
import * as genActions from '../../../redux/actions/general.action';
import ViewReadOnly from '../../../views/templates/main/task/readOnlyTask.jsx';
import ViewEditable from '../../../views/templates/main/task/editableTask.jsx';
import configResolver from '../../../../config/configResolver';
import { generateRoute } from '../../../../config/router';
import { entityCreated, entityError } from '../../../services/general';
import { TASK_LIST } from '../../../../api/urls';

class Task extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			saved: false,
		}
	}

	componentDidUnmount() {
		if (this.props.newTask && !this.state.saved) {
			this._onNewTaskCancel(this.props.params.taskId);
		}
	}

	handleFileUpload = (acceptedFiles) => {
		let formData = new FormData();
		acceptedFiles.map((file) => {
			name = file.name;
			formData.append(file.name, file)
		});

		this.props.actions.taskUpload(formData, this.props.params.taskId);
	};

	handleFileDownload = (slug) => {
		this.props.actions.downloadFile(slug, configResolver.getDownloadFileConfig());
	};

	handleFileDelete = (slug, e) => {
		this.props.actions.deleteFile(slug, configResolver.deleteTaskAttachment(this.props.params.taskId, slug));
		e.preventDefault();
	};

	_onValidate = () => {
		const task = this.props.task;
		console.log(task);

		if (task.taskHasAssignedUsers.length === 0) {
			return false;
		}
		if (task.title.trim() === '') {
			return false;
		}
		if (!task.company && !task.company.id) {
			return false;
		}

		return true;
	};

	_onNewTaskCreate = (taskId) => {
		const path = generateRoute('task_list', { taskId: taskId });
		if (this._onValidate()) {
			this.setState({
				saved: true,
			});
			entityCreated('Task created!', path);
		} else {
			entityError('The following fields are mandatory: Status, Project, Requester, Company, Assigned');
		}
	};
	_onNewTaskCancel = (taskId) => {
		this.props.actions.deleteTask(`${TASK_LIST}/${taskId}`);
	};

	componentWillMount() {
		this.props.actions.loadTaskById(this.props.params.taskId);
		this.props.actions.loadEntityList(configResolver.loadOptionList(this.props.params.taskId));
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.task !== this.props.task) {
			this.props.actions.loadEntityList(configResolver.loadOptionList(this.props.params.taskId));
		}
	}

	render() {
		if (this.props.task) {
			return this.renderTask()
		} else {
			return <p>Task id: {this.props.params.taskId} ...</p>
		}
	}

	renderTask = () => {
		if (this.props.canEdit) {
			return (<ViewEditable
				handleFileUpload={this.handleFileUpload}
				handleFileDownload={this.handleFileDownload}
				handleFileDelete={this.handleFileDelete}
				handleTaskCreate={this._onNewTaskCreate.bind(null, this.props.params.taskId)}
				handleTaskDelete={this._onNewTaskCancel.bind(null, this.props.params.taskId)}
				{...this.props}
			/>);
		}

		return (<ViewReadOnly {...this.props} />);
	}
}

Task.propTypes = {
	//myProp: PropTypes.string.isRequired
	actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
	const task = state.tasks.task.data || false;
	return {
		task: task,
		newTask: ownProps.params.newTask,
		options: state.tasks.options,
		canEdit: task ? task.canEdit : false,
		user: state.auth.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ ...actions, ...genActions }, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
