import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/settings.action';
import View from '../../../views/templates/main/settings/settings.jsx';

class Settings extends Component {



    render() {

        const acl=this.props.state.auth.user.userRoleAcl;

        return (
            <View acl={acl} />
        );
    }
}

Settings.propTypes = {
    //myProp: PropTypes.string.isRequired
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);