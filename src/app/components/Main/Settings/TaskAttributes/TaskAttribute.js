import React, { Component} from 'react';
import View from '../../../../forms/Settings/TaskAttribute.form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import configResolver from '../../../../../config/configResolver';


class TaskAttribute extends Component {


    constructor(props, context) {
        super(props, context);
        this.entityId=props.params.taskAttributeId;
        this.entityConfig = configResolver.getTaskAttributesConfig(this.entityId);
        this.customAttributeTypes=[
            {id:'input',title:'Input',},
            {id:'text_area',title:'Text area'},
            {id:'simple_select',title:'Simple select'},
            {id:'multi_select',title:'Multiselect'},
            {id:'checkbox',title:'Checkbox'},
            {id:'date',title:'Date'},
            {id:'integer_number',title:'Number'},
            {id:'decimal_number',title:'Decimal number'}
        ];
    }

    deleteHandler=(id)=>{
        this.props.actions.deleteEntity(this.entityId, this.entityConfig);
    };


    componentWillMount() {
        if (this.entityId && !this.props.taskAttribute) {
            this.props.actions.loadEntityById(this.entityId, this.entityConfig);
        }

    }
    setCustomValues = (values) => {
        console.log('set values '+values);
        this.setState({
            customValues: values
        })
    };

    onSubmit = (values) => {
        if (this.entityId) {
            this.props.actions.updateEntity(this.entityId, values, this.entityConfig);
        } else {
            this.props.actions.createEntity(values,this.entityConfig);
        }
    };

    render() {
        return (
            <View formError={null} onSubmit={this.onSubmit} {...this.props} setCustomValues={this.setCustomValues} config={this.entityConfig}
                  heading={this.props.companyAttribute ? "Edit task attribute" : "Add task attribute"} handleDelete={this.deleteHandler} customAttributeTypes={this.customAttributeTypes} />
        );
    }
}


function mapStateToProps(state, ownProps) {
    const taskAttributeId = ownProps.params.taskAttributeId;
    const taskAttribute = state.taskAttributes.data.filter((taskAttribute) => parseInt(taskAttribute.id, 10) === parseInt(taskAttributeId, 10));
    return {
        companyAttribute: taskAttribute.length > 0 ? taskAttribute[0] : false,
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskAttribute);

