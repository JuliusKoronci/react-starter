import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/smtps/smtps.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import configResolver from '../../../../../config/configResolver';

class Smtps extends Component {

    componentWillMount() {
        this.props.actions.requestSmtps();
        this.smtpConfig = configResolver.getSmtpConfig();
        this.smtpDeleteConfig = configResolver.getSmtpDeleteConfig();

    }

    deleteHandler=(id)=>{
        this.props.actions.deleteEntity(id, this.smtpDeleteConfig);
    };

    render() {
        return (
            <View {...this.props.smtps} loadSmtps={this.props.actions.requestSmtps} handleDelete={this.deleteHandler}/>
        );
    }
}

Smtps.propTypes = {
    smtps: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        smtps: state.smtps
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions,...generalActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Smtps);
