import React, {Component} from 'react';
import View from '../../../../forms/Settings/Imap.form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import * as systemActions from  '../../../../redux/actions/system.actions';
import configResolver from '../../../../../config/configResolver';

class Imap extends Component {

    constructor(props, context) {
        super(props, context);
        this.imapConfig = configResolver.getImapConfig(props.params.imapId);
        this.editing=!!props.params.imapId;
    }

    componentWillMount() {
        if (this.props.params.imapId && !this.props.imap) {
            this.props.actions.loadEntityById(this.props.params.imapId, this.imapConfig);
        }
        this.props.actions.requestProjects();
    }

    deleteHandler=()=>{
        if(this.props.params.imapId){
        this.props.actions.deleteEntity(this.props.params.imapId, this.imapConfig);
        }
    };


    onSubmit = (values) => {


        this.imapConfig = configResolver.getImapConfig(this.props.params.imapId, values.project.id );

        if (this.props.params.imapId) {
            this.props.actions.updateEntity(this.props.params.imapId, values, this.imapConfig);
        } else {
            this.props.actions.createEntity(values,this.imapConfig);
        }
    };

    render() {
        return (
            <View onSubmit={this.onSubmit} {...this.props} heading={this.props.imap ? "Edit imap" : "Add imap"} editing={this.editing} handleDelete={this.deleteHandler} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const imapId = ownProps.params.imapId;
    const imap = state.imaps.data.filter((imap) => parseInt(imap.id, 10) === parseInt(imapId, 10));
    const projects = state.projects.data;
    return {
        imap: imap.length > 0 ? imap[0] : false,
        projects: projects
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions, ...systemActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Imap);
