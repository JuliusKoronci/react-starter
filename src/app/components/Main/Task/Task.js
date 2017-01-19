import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/tasks.action';

class Task extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        if (!this.props.task) {
            this.props.actions.loadTaskById(this.props.params.taskId);
        }
    }

    render() {
        if (this.props.task) {
            return this.renderTask(this.props.task)
        } else {
            return <p>Task id: {this.props.params.taskId}  ...</p>
        }
    }

    renderTask = (task) => {
        return (<p>
            {task.title}
        </p>)
    }
}

Task.propTypes = {
    //myProp: PropTypes.string.isRequired
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    const taskId = ownProps.params.taskId;
    const task = state.tasks.data.filter((task) => task.id == taskId);
    return {
        task: task.length > 0 ? task[0] : false
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);