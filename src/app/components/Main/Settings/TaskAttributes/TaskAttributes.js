import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/task_attributes/task_attributes.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class TaskAttributes extends Component {

    componentWillMount() {
        this.props.actions.requestTaskAttributes();
    }

    render() {
        return (
            <View {...this.props.taskAttributes} loadTaskAttributes={this.props.actions.requestTaskAttributes}/>
        );
    }
}

TaskAttributes.propTypes = {
    taskAttributes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        taskAttributes: state.taskAttributes
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskAttributes);
