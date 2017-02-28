import React, { Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as userActions from '../../../../redux/actions/users.action';
import * as generalActions from '../../../../redux/actions/general.action';
import configResolver from '../../../../../config/configResolver';
import View from '../../../../forms/Settings/User.form.js';

class User extends Component {


    constructor(props, context) {
        super(props, context);
        this.userConfig = configResolver.getUserConfig(props.params.userId);
        this.profileAvatarConfig = configResolver.getProfileAvatarConfig(props.params.userId);
    }

    deleteHandler=(id)=>{
        this.props.actions.deleteEntity(this.props.params.userId, this.userConfig);
    };

    componentWillMount() {
        if (this.props.params.userId && !this.props.user) {
            this.props.actions.loadEntityById(this.props.params.userId, this.userConfig);
        }
        this.props.actions.requestRoles();
        this.props.actions.requestCompanies();
    }

    handleFileUpload = (e) => {
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append('file', file);
        this.props.actions.uploadAvatar(formData, this.profileAvatarConfig);
    };

    submitHandler = (values) => {

        console.log(values);
        let userAdditionalConfig=configResolver.getUserAdditionalConfig(this.props.params.userId, values.user_role.id, values.company.id, !!this.props.user);
        this.userConfig.url=userAdditionalConfig.url;
        this.userConfig.remapValues=Object.assign(this.userConfig.remapValues, userAdditionalConfig.additionalFields);
        console.log(this.userConfig.remapValues);


                if (this.props.params.userId) {
            this.props.actions.updateEntity(this.props.params.userId, values, this.userConfig);
        } else {
            this.props.actions.createEntity(values,this.userConfig);
        }

    };

    passwordHandler = (values,e) => {
    	// alert('passwordHandler')
    	// NProgress.start();
    	// const old_password = '';
    	// const repeat_password = '';
    	// if (old_password !== repeat_password){
    	// 	return;
    	// }
    	// this.props.actions.updateEntity(this.props.params.userId, values, this.userConfig);
    	// console.log(values)
    	// e.preventDefault();
    	// e.stopPropagation();
    	// return false;
    }

    render() {
        return (
            <View formError={null} onSubmit={this.submitHandler} passwordHandler={this.passwordHandler} {...this.props} handleFileUpload={this.handleFileUpload} companies={this.props.companies} roles={this.props.roles} user={this.props.user} editing={!!this.props.user} heading={this.props.user ? "Edit user" : "Add user"} handleDelete={this.deleteHandler} />
        );
    }
}



function mapStateToProps(state, ownProps) {
    const userId = ownProps.params.userId;
    const user = state.users.data.filter((user) => parseInt(user.id, 10) === parseInt(userId, 10));
    const roles=state.roles.data;
    const companies=state.companies.data;
    return {
        user: user.length > 0 ? user[0] : false,
        userId: ownProps.params.userId,
        roles,
        companies
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions, ...userActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);