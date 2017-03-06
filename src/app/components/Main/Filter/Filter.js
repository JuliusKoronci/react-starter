import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/tasks.action';
import configResolver from '../../../../config/configResolver';

import View from '../../../views/templates/main/filter/filter.jsx';


class Filter extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={filterFormVisible:false}
    }

    componentDidMount() {

            this.config = configResolver.tasksConfig('project', 130);

        this.props.actions.requestTasks(this.config);
    }


    toggleFilter=(e)=>{
        this.setState({filterFormVisible:!this.state.filterFormVisible})
    };

    render() {

        return (
            <View {...this.props} toggleFilter={this.toggleFilter} filterFormVisible={this.state.filterFormVisible} />
        );
    }
}


function mapStateToProps(state) {
    return {
        filterFormVisible:state.filterFormVisible,
        tasks: state.tasks,
    };
}
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({...actions}, dispatch)};

}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
