import React, {Component} from 'react';
import View from '../../../../forms/Settings/CompanyAttribute.form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import NProgress from '../../../../../../node_modules/nprogress/nprogress';
import configResolver from '../../../../../config/configResolver';

class CompanyAttribute extends Component {

    constructor(props, context) {
        super(props, context);
        this.entityId=props.params.companyAttributeId;
        this.entityConfig = configResolver.getCompanyAttributesConfig(this.entityId);
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
        if (this.entityId && !this.props.companyAttribute) {
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
        heading={this.props.companyAttribute ? "Edit company attribute" : "Add company attribute"} handleDelete={this.deleteHandler} customAttributeTypes={this.customAttributeTypes}  />
        );
    }
}


function mapStateToProps(state, ownProps) {
    const companyAttributeId = ownProps.params.companyAttributeId;
    const companyAttribute = state.companyAttributes.data.filter((companyAttribute) => parseInt(companyAttribute.id, 10) === parseInt(companyAttributeId, 10));
    return {
        companyAttribute: companyAttribute.length > 0 ? companyAttribute[0] : false,
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyAttribute);


