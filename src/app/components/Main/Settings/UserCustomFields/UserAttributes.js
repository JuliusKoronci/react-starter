import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/user_custom_fields/user_attributes.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class UsersAttributes extends Component {

    componentWillMount() {
        this.props.actions.requestUserAttributes();
    }

    render() {
        return (
            <View {...this.props.userAttributes} loadUserAttributes={this.props.actions.requestUserAttributes}/>
        );
    }
}

UsersAttributes.propTypes = {
    userAttributes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        userAttributes: state.userAttributes
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAttributes);

