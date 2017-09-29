import React, {Component} from 'react';
import ProjectForm from '../../../forms/Project/Project.form.js';
import UserAddForm from '../../../forms/Project/UserAdd.form.js';
import ProjectAclForm from '../../../forms/Project/ProjectAcl.form.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/settings.action';
import * as systemActions from '../../../redux/actions/system.actions';
import * as generalActions from '../../../redux/actions/general.action';
import configResolver from '../../../../config/configResolver';

class Project extends Component {

    constructor(props, context) {
        super(props, context);
        this.projectConfig = configResolver.getProjectConfig(props.params.projectId);
        this.projectCreatedConfig = configResolver.projectCreatedConfig(props.params.projectId);
        this.getAllUsersConfig = configResolver.getAllUsersConfig();


        //check permission
        if(this.props.auth.user.userRoleAcl.indexOf('create_projects')===-1){
            console.log('no permission');
        }else{
            console.log('has permission');
        }

        // if(this.props.project ){
        //     // let hasProject=this.props.project.userHasProjects.filter((user) => parseInt(user.user.id, 10) === parseInt(this.props.auth.user.id, 10));
        //     // alert(hasProject);
        // }
        //

    }

    componentWillMount() {

        this.props.actions.loadEntityById(this.props.params.projectId, this.projectConfig);

        // if (this.props.params.projectId && !this.props.project) {
        //     this.props.actions.loadEntityById(this.props.params.projectId, this.projectConfig);
        //     // this.props.actions.requestAllUsers();
        //     // this.props.actions.loadEntityList(this.getAllUsersConfig);
        // }

        if(this.props.usersAll.length===0){
            this.props.actions.loadEntityList(this.getAllUsersConfig);
        }
    }

    componentWillUpdate(nextProps){
        if(nextProps.params.projectId!==this.props.params.projectId){
            this.props.actions.loadEntityById(nextProps.params.projectId, configResolver.getProjectConfig(nextProps.params.projectId));
        }
    }

    onSubmit = (values) => {
        if (this.props.params.projectId) {
            this.projectConfig = configResolver.getProjectConfig(this.props.params.projectId);
            this.props.actions.updateEntity(this.props.params.projectId, values, this.projectConfig);
        } else {
            this.projectCreatedConfig = configResolver.projectCreatedConfig(this.props.params.projectId);
            this.props.actions.createEntity(values,this.projectCreatedConfig);
        }
    };

    userAddOnSubmit = (data) => {

        let config = configResolver.projectUserConfig(this.props.params.projectId,data.userId);
        let values={acl:'view_own_tasks'};
        this.props.actions.createEntity(values, config);
    };

    projectAclOnSubmit = (values) => {
        // console.log(values);
        // alert('project acl submit');

        const configAcl = configResolver.projectAclConfig(this.props.params.projectId);
        let newValues={};
        for(let key in values) {
            if(values.hasOwnProperty(key)) {
                newValues[key.replace("user", "")] = values[key].split(',');
            }
        }

        this.props.actions.generalRequest(newValues, configAcl);

    };

    removeUser=(id, e)=>{
        e.preventDefault();
        let config = configResolver.projectUserDeleteConfig(this.props.params.projectId,id);
        this.props.actions.generalRequest(null, config);
    };

    render() {
        return (
            <div>
            <ProjectForm onSubmit={this.onSubmit} {...this.props} heading={this.props.project ? "Edit project" : "Add project"} />

                {this.props.project && this.props.project.canEdit  && <UserAddForm onSubmit={this.userAddOnSubmit} {...this.props} />}
                {this.props.project && this.props.project.canEdit  && <ProjectAclForm onSubmit={this.projectAclOnSubmit} {...this.props} removeUser={this.removeUser} />}
                {/*{this.props.project && ( this.props.project.canEdit || this.props.auth.user.userRoleAcl.indexOf('update_all_tasks')!==-1 ) && <UserAddForm onSubmit={this.userAddOnSubmit} {...this.props} />}*/}
                {/*{this.props.project && ( this.props.project.canEdit || this.props.auth.user.userRoleAcl.indexOf('update_all_tasks')!==-1 ) && <ProjectAclForm onSubmit={this.projectAclOnSubmit} {...this.props} removeUser={this.removeUser} />}*/}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const projectId = ownProps.params.projectId;
    const project = state.projects.data.filter((project) => parseInt(project.id, 10) === parseInt(projectId, 10));

    return {
        project: project.length > 0 ? project[0] : false,
        auth: state.auth,
        usersAll: state.usersAll
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions, ...systemActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
