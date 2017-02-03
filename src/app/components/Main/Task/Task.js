import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/tasks.action';
import * as genActions from '../../../redux/actions/general.action';
import ViewReadOnly from '../../../views/templates/main/task/readOnlyTask.jsx';
import ViewEditable from '../../../views/templates/main/task/editableTask.jsx';
import configResolver from '../../../../config/configResolver';

class Task extends Component {

    componentWillMount() {
        if (!this.props.task) {
            this.props.actions.loadTaskById(this.props.params.taskId);
        }
        this.props.actions.loadEntityList(configResolver.loadStatusList());
    }

    handleStatus = (data, taskId) => {
        const userId = data.assigned || this.props.user.id;
        let assignConfig = false;
        if (!data.assigned) {
            assignConfig = configResolver.getAssignUserConfig(taskId, userId);
            // handle assign user first
        }
        const statusConfig = configResolver.changeStatusConfig(taskId, userId, data.status);
        this.props.actions.updateStatus(statusConfig, assignConfig);

    };

    render() {
        if (this.props.task) {
            return this.renderTask()
        } else {
            return <p>Task id: {this.props.params.taskId} ...</p>
        }
    }

    renderTask = () => {
        if (this.props.canEdit) {
            return (<ViewEditable {...this.props} handleStatus={this.handleStatus}/>);
        }

        return (<ViewReadOnly {...this.props}/>);
    }
}

Task.propTypes = {
    //myProp: PropTypes.string.isRequired
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    const taskId = ownProps.params.taskId;
    const task = state.tasks.data.filter((task) => parseInt(task.id, 10) === parseInt(taskId, 10));
    return {
        task: task.length > 0 ? task[0] : false,
        canEdit: true,
        user: state.auth.user,
        statuses: state.statuses.data
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...genActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);