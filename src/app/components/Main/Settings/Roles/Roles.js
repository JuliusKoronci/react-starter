import React, {Component} from 'react';
import View from '../../../../views/templates/main/settings/roles/roles.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class Roles extends Component {


    componentWillMount() {
        this.props.actions.requestRoles();
    }

    render() {
        return (
            <View {...this.props.roles} loadRoles={this.props.actions.requestRoles} />
        );
    }
}


function mapStateToProps(state) {
    return {
        roles: state.roles
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Roles);
