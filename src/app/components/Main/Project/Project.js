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
import texts from '../../../../config/texts';

class Project extends Component {

    constructor(props, context) {
        super(props, context);
        this.projectConfig = configResolver.getProjectConfig(props.params.projectId);
        this.projectCreatedConfig = configResolver.projectCreatedConfig(props.params.projectId);
        this.getAllUsersConfig = configResolver.getAllUsersConfig();


        // //check permission
        // if(this.props.auth.user.userRoleAcl.indexOf('create_projects')===-1){
        //     console.log('no permission');
        // }else{
        //     console.log('has permission');
        // }

        // if(this.props.project ){
        //     // let hasProject=this.props.project.userHasProjects.filter((user) => parseInt(user.user.id, 10) === parseInt(this.props.auth.user.id, 10));
        //     // alert(hasProject);
        // }
        //




        this.state={
          formsDirty:{
              ProjectForm:false,
              ProjectAclForm:false,
          }
        };



        this.dirtyHandler = (ev) =>{
            if(this.isDirty()) {
                if(ev) {
                    ev.preventDefault();
                    return ev.returnValue = texts.areYouSureToClose;
                }
                else {
                    return false;
                }
            }
        }

    }

    componentWillUnmount(){
        window.removeEventListener("beforeunload", this.dirtyHandler);
        this.props.actions.isDirty(false);
    }
    componentDidMount(){
        window.addEventListener("beforeunload",this.dirtyHandler);
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave.bind(this));
    };

    routerWillLeave(nextLocation) {
        const dirty = this.isDirty();
        if (dirty) {
            return texts.unsavedInformation;
        }
    }

    isDirty=()=>{
        // console.log(this.state);
        return ( this.state.formsDirty.ProjectForm || this.state.formsDirty.ProjectAclForm );
    };



    dispatchIsDirty=(formName,dirty,pristine)=>{


        // console.log(formName+' state is gonna be: ',{formsDirty:Object.assign({},this.state.formsDirty,{[formName]:dirty})})

            this.setState(
                {formsDirty:Object.assign({},this.state.formsDirty,{[formName]:dirty})}
                );

                //()=>{console.log('is it dirty yet or what?', this.isDirty())});
    };


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

    componentDidUpdate(prevProps){
        if(prevProps.params.projectId!==this.props.params.projectId) {
            alert('did update setting state');
            console.log('did update setting state');
            this.setState({
                formsDirty: {
                    ProjectForm: false,
                    ProjectAclForm: false,
                }
            });
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
        // console.log('dirty? ' + this.props.isDirty);
        // console.log('dirty form? ' + (this.projectF?this.projectF.dirty:'undefined'));
        console.log('state:',this.state);
        console.log('props:',this.props);
        return (
            <div>
            <ProjectForm formDirty={this.state.formsDirty.ProjectForm} ref={pf=>{this.projectF=pf}} dispatchIsDirty={this.dispatchIsDirty} onSubmit={this.onSubmit} {...this.props} heading={this.props.project ? "Edit project" : "Add project"} />

                {this.props.project && this.props.project.canEdit  && <UserAddForm onSubmit={this.userAddOnSubmit} {...this.props} />}
                {this.props.project && this.props.project.canEdit && false  && <ProjectAclForm onSubmit={this.projectAclOnSubmit} {...this.props} formDirty={this.state.formsDirty.ProjectAclForm}  dispatchIsDirty={this.dispatchIsDirty} removeUser={this.removeUser} />}
                {/*{this.props.project && ( this.props.project.canEdit || this.props.auth.user.userRoleAcl.indexOf('update_all_tasks')!==-1 ) && <UserAddForm onSubmit={this.userAddOnSubmit} {...this.props} />}*/}
                {/*{this.props.project && ( this.props.project.canEdit || this.props.auth.user.userRoleAcl.indexOf('update_all_tasks')!==-1 ) && <ProjectAclForm onSubmit={this.projectAclOnSubmit} {...this.props} removeUser={this.removeUser} />}*/}
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    const projectId = ownProps.params.projectId;
    // const project = state.projects.data.filter((project) => parseInt(project.id, 10) === parseInt(projectId, 10));

    // console.log(state.system.menu.projects)
    const project = state.system.menu.projects.filter((project) => parseInt(project.id, 10) === parseInt(projectId, 10));

    return {
        project: project.length > 0 ? project[0] : false,
        auth: state.auth,
        usersAll: state.usersAll,
        // isDirty: !!((state.form.ProjectForm && state.form.ProjectForm.anyTouched) || (state.form.ProjectAclForm && state.form.ProjectAclForm.anyTouched) || (state.form.UserAdd && state.form.UserAdd.anyTouched)),
        // isDirty: !!((state.form.ProjectForm && state.form.ProjectForm.anyTouched) || (state.form.ProjectAclForm && state.form.ProjectAclForm.anyTouched) || (state.form.UserAdd && state.form.UserAdd.anyTouched)),
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions, ...systemActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
