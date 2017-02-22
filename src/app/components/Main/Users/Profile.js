import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/users.action';
import * as generalActions from '../../../redux/actions/general.action';
import View from '../../../forms/Users/Profile.form';
import configResolver from '../../../../config/configResolver';

class Profile extends Component {

    constructor(props, context) {
        super(props, context);
        this.profileConfig = configResolver.getProfileConfig(props.userId);
    }


    componentWillMount(){
        this.props.actions.loadEntityById(this.props.userId, this.profileConfig);
    }

// handleReset=()=>{
//
// }



    handleFileUpload = (e) => {
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append(file.name, file);
        this.props.actions.fileUpload(formData, this.profileConfig);
    };

    handleSubmit=(values)=>{
        let formFields=this.profileConfig.allowedFormFields;
        this.props.actions.updateEntity(this.props.userId, values, this.profileConfig);
    };

    render() {
        const {user} = this.props;
        return (
            <View user={user} onSubmit={this.handleSubmit} handleFileUpload={this.handleFileUpload} />
        );
    }
}

Profile.propTypes = {
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
    return {
        userId: state.auth.user.id,
        user:state.profile.data
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);