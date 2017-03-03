import React, {Component} from 'react';
import View from '../../../views/templates/main/tasks/tasklist.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/tasks.action';
import configResolver from '../../../../config/configResolver';

class TaskList extends Component {

    componentDidMount() {

        this.config=configResolver.tasksConfig('project',this.props.params.projectId);

        this.props.actions.requestTasks(this.config);
    }

    componentDidUpdate(prevProps) {

        this.config=configResolver.tasksConfig('project',this.props.params.projectId);

        if (prevProps.params !== this.props.params) {
            this.props.actions.requestTasks(this.config);
        }
    }


    loadTasksFunction = (url, e) => {
        this.props.actions.requestTasksFromUrl(url);
    };

    render() {
        return (
            <View {...this.props} loadTasksFunction={this.loadTasksFunction}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const filter = state.filter.filter((f) => {
        return f.id == ownProps.params.filterId
    })[0];

    return {
        tasks: state.tasks,
        filter
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);