import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/users.action';
import View from '../../../views/templates/main/users/profile.jsx';

class Profile extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {user} = this.props;
        return (
            <View user={user}/>
        );
    }
}

Profile.propTypes = {
    //myProp: PropTypes.string.isRequired
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
    return {
        user: state.auth.user
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);