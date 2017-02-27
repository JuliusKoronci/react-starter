import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/user_custom_fields/user_attributes.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import configResolver from '../../../../../config/configResolver';

class UsersAttributes extends Component {

    constructor(props, context) {
        super(props, context);
        this.entityConfig = configResolver.getUserAttributesConfig(props.params.userAttributeId);
    }

    deleteHandler=(id)=>{
        this.props.actions.deleteEntity(id, this.entityConfig);
    };

    componentWillMount() {
        this.props.actions.requestUserAttributes();
    }

    render() {
        return (
            <View {...this.props.userAttributes} loadUserAttributes={this.props.actions.requestUserAttributes} handleDelete={this.deleteHandler} />
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
        actions: bindActionCreators({...actions, ...generalActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAttributes);

