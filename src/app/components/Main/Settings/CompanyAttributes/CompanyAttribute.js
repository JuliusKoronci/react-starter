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
        NProgress.start();

        if (this.entityId) {
            alert('would update');
            console.log(values);
            // this.props.actions.updateEntity(this.entityId, values, this.entityConfig);
        } else {
            alert('would create');
            console.log(values);
            // this.props.actions.createEntity(values,this.entityConfig);
        }
    };

    render() {
        return (
            <View formError={null} onSubmit={this.onSubmit} {...this.props} setCustomValues={this.setCustomValues}
        heading={this.props.companyAttribute ? "Edit company attribute" : "Add company attribute"} handleDelete={this.deleteHandler} />
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


