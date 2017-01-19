import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/tasks.action';

class Task extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        if (this.props.task.length === 0) {
            console.log('no task');
        }
    }

    render() {
        return (
            <p>Task</p>
        );
    }
}

Task.propTypes = {
    //myProp: PropTypes.string.isRequired
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    const taskId = ownProps.params.taskId;
    const task = state.tasks.data.filter((task => {
        return task.id === taskId
    }));
    return {
        task: task
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);