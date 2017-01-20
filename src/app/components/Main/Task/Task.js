import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/tasks.action';
import ViewReadOnly from '../../../views/templates/main/task/readOnlyTask.jsx';
import ViewEditable from '../../../views/templates/main/task/editableTask.jsx';

class Task extends Component {

    componentDidMount() {
        if (!this.props.task) {
            this.props.actions.loadTaskById(this.props.params.taskId);
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
            return (<ViewEditable {...this.props}/>);
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
        canEdit: true
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);