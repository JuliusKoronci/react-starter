import React, {Component} from 'react';
import View from '../../../../views/templates/main/settings/imaps/add_imap.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import NProgress from '../../../../../../node_modules/nprogress/nprogress';
import configResolver from '../../../../../config/configResolver';

class imap extends Component {

    constructor(props, context) {
        super(props, context);
        this.imapConfig = configResolver.getImapConfig(props.params.imapId);
    }

    componentWillMount() {
        if (this.props.params.imapId && !this.props.imap) {
            this.props.actions.loadEntityById(this.props.params.imapId, this.imapConfig);
        }
    }

    onSubmit = (values,e) => {
    	alert('foo')
        NProgress.start();
        if (this.props.params.imapId) {
            this.props.actions.updateEntity(this.props.params.imapId, values, this.imapConfig);
        } else {
            this.props.actions.createEntity(values,this.imapConfig);
        }
        e.preventDefault();
    };

    render() {
        return (
            <View onSubmit={this.onSubmit} {...this.props} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const imapId = ownProps.params.imapId;
    const imap = state.companies.data.filter((imap) => parseInt(imap.id, 10) === parseInt(imapId, 10));
    return {
        imap: imap.length > 0 ? imap[0] : false,
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(imap);
