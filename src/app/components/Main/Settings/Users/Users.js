import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/users/users.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class Users extends Component {

    componentWillMount() {
        this.props.actions.requestUsers();
    }

    render() {
        return (
            <View {...this.props.users} loadUsers={this.props.actions.requestUsers}/>
        );
    }
}

Users.propTypes = {
    users: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        users: state.users
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
