import React, {Component} from 'react';
import View from '../../../views/templates/main/tasks/tasklist.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/tasks.action';

class Dashboard extends Component {

    componentDidMount() {
        this.props.actions.requestDefaultTasks(this.props.params.filterId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.filterId !== this.props.params.filterId) {
            this.props.actions.requestDefaultTasks(this.props.params.filterId);
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
        return f.id === parseInt(ownProps.params.filterId,10);
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);