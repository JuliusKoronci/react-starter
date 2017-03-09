import React, {Component} from 'react';
import View from '../../../forms/Project/Project.form.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/settings.action';
import * as generalActions from '../../../redux/actions/general.action';
import configResolver from '../../../../config/configResolver';

class Project extends Component {

    constructor(props, context) {
        super(props, context);
        this.projectConfig = configResolver.getProjectConfig(props.params.projectId);
        this.projectCreatedConfig = configResolver.projectCreatedConfig(props.params.projectId);
    }

    componentWillMount() {
        if (this.props.params.projectId && !this.props.project) {
            this.props.actions.loadEntityById(this.props.params.projectId, this.projectConfig);
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

    render() {
        return (
            <View onSubmit={this.onSubmit} {...this.props} heading={this.props.project ? "Edit project" : "Add project"} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const projectId = ownProps.params.projectId;
    const project = state.projects.data.filter((project) => parseInt(project.id, 10) === parseInt(projectId, 10));
    return {
        project: project.length > 0 ? project[0] : false,
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
