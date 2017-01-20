import React, {Component} from 'react';
import View from '../../../views/templates/main/tasks/tasklist.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/tasks.action';

class Dashboard extends Component {

    componentDidMount() {
        this.props.actions.requestDefaultTasks();
    }



    loadTasksFunction =(url, e)=>{
        this.props.actions.requestTasksFromUrl(url);
    };

    render() {
        return (
            <View tasks={this.props.tasks} loadTasksFunction={this.loadTasksFunction} />
        );
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);