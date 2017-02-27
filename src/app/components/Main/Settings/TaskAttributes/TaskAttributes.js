import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/task_attributes/task_attributes.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import configResolver from '../../../../../config/configResolver';

class TaskAttributes extends Component {

    constructor(props, context) {
        super(props, context);
        this.entityConfig = configResolver.getTaskAttributesConfig(props.params.taskAttributeId);
    }

    deleteHandler=(id)=>{
        this.props.actions.deleteEntity(id, this.entityConfig);
    };

    componentWillMount() {
        this.props.actions.requestTaskAttributes();
    }

    render() {
        return (
            <View {...this.props.taskAttributes} loadTaskAttributes={this.props.actions.requestTaskAttributes} handleDelete={this.deleteHandler} />
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
        actions: bindActionCreators({...actions, ...generalActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskAttributes);
