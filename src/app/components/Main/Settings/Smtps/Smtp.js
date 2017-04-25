import React, { Component} from 'react';
import View from '../../../../forms/Settings/Smtp.form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import configResolver from '../../../../../config/configResolver';

class Smtp extends Component {

    constructor(props, context) {
        super(props, context);
        this.smtpConfig = configResolver.getSmtpConfig(props.params.smtpId);
        this.editing=!!props.params.smtpId;
    }

    componentWillMount() {
        if (this.props.params.smtpId && !this.props.smtp) {
            this.props.actions.loadEntityById(this.props.params.smtpId, this.smtpConfig);
        }
     
    }

    deleteHandler=(id,e)=>{
        e.preventDefault();
        if(this.props.params.smtpId){
            let config=configResolver.smtpDeleteConfig(this.props.params.smtpId);
            this.props.actions.deleteEntity(this.props.params.smtpId, config);
        }
    };


    onSubmit = (values) => {
        this.smtpConfig = configResolver.getSmtpConfig(this.props.params.smtpId );

        if (this.props.params.smtpId) {
            this.props.actions.updateEntity(this.props.params.smtpId, values, this.smtpConfig);
        } else {
            this.props.actions.createEntity(values,this.smtpConfig);
        }
    };

    render() {
        return (
            <View onSubmit={this.onSubmit} {...this.props} heading={this.props.smtp ? "Edit smtp" : "Add smtp"} editing={this.editing} handleDelete={this.deleteHandler} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const smtpId = ownProps.params.smtpId;
    const smtp = state.smtps.data.filter((smtp) => parseInt(smtp.id, 10) === parseInt(smtpId, 10));

    return {
        smtp: smtp.length > 0 ? smtp[0] : false,

    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Smtp);
