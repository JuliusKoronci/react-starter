import React, {PropTypes, Component} from 'react';
import View from '../../../views/templates/main/tasks/tasklist.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/tasks.action';
import {defaultFilter} from  '../../../../api/tasks/tasks.api';

class Dashboard extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.actions.requestDefaultTasks();
        // defaultFilter().then((tasks) => {
        //
        //    this.props.actions.tasksReceived(tasks);
        //
        // })
    }

    render() {
        return (
            <View tasks={this.props.tasks}/>
        );
    }
}

Dashboard.propTypes = {
    //myProp: PropTypes.string.isRequired
};

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