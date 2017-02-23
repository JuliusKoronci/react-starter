import React, { Component} from 'react';
import configResolver from '../../../../../config/configResolver';
import NProgress from '../../../../../../node_modules/nprogress/nprogress';
import View from '../../../../views/templates/main/settings/smtps/add_smtp.jsx';

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

    handleSubmit = (values) => {
    	NProgress.start();
    	alert('ok')
    }

    render() {
        return (
            <View onSumbit={this.handleSubmit} {...this.props} />
        );
    }
}




export default Smtp;
