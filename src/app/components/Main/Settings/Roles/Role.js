import React, {Component} from 'react';
import View from '../../../../forms/Settings/Role.form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import configResolver from '../../../../../config/configResolver';

class Role extends Component {

    constructor(props, context) {
        super(props, context);
        this.roleConfig = configResolver.getRoleConfig(props.params.roleId);
        this.editing=!!props.params.roleId;
    }

    componentWillMount() {
        if (this.props.params.roleId && !this.props.role) {
            this.props.actions.loadEntityById(this.props.params.roleId, this.roleConfig);
        }

    }

    deleteHandler=()=>{
        if(this.props.params.roleId){
            this.props.actions.deleteEntity(this.props.params.roleId, this.roleConfig);
        }
    };


    onSubmit = (values) => {

        values.acl=values.acl.join();

        this.roleConfig = configResolver.getRoleConfig(this.props.params.roleId );

        if (this.props.params.roleId) {
            let config=configResolver.roleUpdate(this.props.params.roleId);
            this.props.actions.updateEntity(this.props.params.roleId, values, config);
        } else {
            this.props.actions.createEntity(values,this.roleConfig);
        }
    };

    render() {
        return (
            <View onSubmit={this.onSubmit} {...this.props} heading={this.props.role ? "Edit role" : "Add role"} editing={this.editing} handleDelete={this.deleteHandler} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const roleId = ownProps.params.roleId;
    const role = state.roles.data.filter((role) => parseInt(role.id, 10) === parseInt(roleId, 10));

    if(role.length > 0) {
        return {role: role[0]};
    }else{return {role:false}}

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Role);
