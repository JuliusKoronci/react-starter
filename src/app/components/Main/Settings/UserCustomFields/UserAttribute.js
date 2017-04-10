import React, {Component} from 'react';
import View from '../../../../forms/Settings/UserAttribute.form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import configResolver from '../../../../../config/configResolver';

class UserAttribute extends Component {

    constructor(props, context) {
        super(props, context);
        this.entityId=props.params.userAttributeId;
        this.entityConfig = configResolver.getUserAttributesConfig(this.entityId);
    }

    deleteHandler=(id)=>{
        this.props.actions.deleteEntity(this.entityId, this.entityConfig);
    };

    componentWillMount() {
        if (this.entityId && !this.props.userAttribute) {
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
            // alert('would update');
            // console.log(values);
            this.props.actions.updateEntity(this.entityId, values, this.entityConfig);
        } else {
            // alert('would create');
            // console.log(values);
            this.props.actions.createEntity(values,this.entityConfig);
        }
    };

    render() {
        return (
            <View formError={null} onSubmit={this.onSubmit} {...this.props} setCustomValues={this.setCustomValues} config={this.entityConfig}
        heading={this.props.userAttribute ? "Edit user attribute" : "Add user attribute"} handleDelete={this.deleteHandler} />
        );
    }
}


function mapStateToProps(state, ownProps) {
    const userAttributeId = ownProps.params.userAttributeId;
    const userAttribute = state.userAttributes.data.filter((userAttribute) => parseInt(userAttribute.id, 10) === parseInt(userAttributeId, 10));
    return {
        userAttribute: userAttribute.length > 0 ? userAttribute[0] : false,
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAttribute);


