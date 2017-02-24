import React, { Component} from 'react';
import configResolver from '../../../../../config/configResolver';
import {connect} from 'react-redux';
import NProgress from '../../../../../../node_modules/nprogress/nprogress';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import * as systemActions from  '../../../../redux/actions/system.actions';
import View from '../../../../forms/Settings/Smtp.form';

class Smtp extends Component {

    constructor(props, context) {
        super(props, context);
        this.smtpConfig = configResolver.getSmtpConfig(props.params.smtpId);
    }

    componentWillMount() {
        if (this.props.params.smtpId && !this.props.smtp) {
            this.props.actions.loadEntityById(this.props.params.smtpId, this.smtpConfig);
        }
    }

    onSumbit = (values) => {
    	NProgress.start();
    	alert('ok')
    }

    render() {
        return (
            <View handleSubmit={this.onSumbit} {...this.props} />
        );
    }
}


function mapStateToProps(state, ownProps) {
    const smtpId = ownProps.params.imapId;
    const smtp = state.imaps.data.filter((smtp) => parseInt(smtp.id, 10) === parseInt(smtpId, 10));
    const projects = [{key:1,title:'Foo'}]; //state.projects.data;
    return {
        smtp: smtp.length > 0 ? smtp[0] : false,
        projects: projects
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Smtp);