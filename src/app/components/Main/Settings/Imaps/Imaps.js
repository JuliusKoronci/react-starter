import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/imaps/imaps.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import configResolver from '../../../../../config/configResolver';

class Imaps extends Component {

    componentWillMount() {
        this.props.actions.requestImaps();
        this.imapConfig = configResolver.getImapConfig();

    }

    deleteHandler=(id)=>{
            this.props.actions.deleteEntity(id, this.imapConfig);
    };

    render() {
        return (
            <View {...this.props.imaps} loadImaps={this.props.actions.requestImaps} handleDelete={this.deleteHandler} />
        );
    }
}

Imaps.propTypes = {
    imaps: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        imaps: state.imaps
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Imaps);
