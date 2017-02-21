import React, { Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import NProgress from '../../../../../../node_modules/nprogress/nprogress';
import configResolver from '../../../../../config/configResolver';
import View from '../../../../forms/Settings/User.form.js';

class User extends Component {


    constructor(props, context) {
        super(props, context);
        this.userConfig = configResolver.getUserConfig(props.params.userId);
    }

    deleteHandler=(id)=>{
        this.props.actions.deleteEntity(this.props.params.userId, this.userConfig);
    };

    componentWillMount() {
        if (this.props.params.userId && !this.props.user) {
            this.props.actions.loadEntityById(this.props.params.userId, this.userConfig);
        }
        this.props.actions.requestRoles();
    }

    submitHandler = (values) => {
        NProgress.start();

        if (this.props.params.userId) {
            this.props.actions.updateEntity(this.props.params.userId, values, this.userConfig);
        } else {
            this.props.actions.createEntity(values,this.userConfig);
        }
    };

    render() {
        return (
            <View formError={null} onSubmit={this.submitHandler} {...this.props} roles={this.props.roles} user={this.props.user} heading={this.props.user ? "Edit user" : "Add user"} handleDelete={this.deleteHandler} />
        );
    }
}



function mapStateToProps(state, ownProps) {
    const userId = ownProps.params.userId;
    const user = state.users.data.filter((user) => parseInt(user.id, 10) === parseInt(userId, 10));
    const roles=state.roles.data;
    return {
        user: user.length > 0 ? user[0] : false,
        roles
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);