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
        this.profileAvatarConfig = configResolver.getProfileAvatarConfig(props.userId);

        this.state = {password: {new: '', repeat: ''}};
    }


    passwordOnChange = (name, e) => {
        const value=e.target.value;

        // let oldState=Object.assign({},this.state);
        // console.log(oldState);
        // let password=oldState.password;
        // let newState=Object.assign(oldState,{password:password});
        // console.log(newState);
        // this.setState(newState);
        let password=Object.assign({},this.state.password);
        password[name]=value;
        this.setState({password:password});
    };

    handlePasswordChangeSubmit = (values, e) => {
        console.log(values, e);
        console.log(this.state.password.new, this.state.password.repeat);
    };


    componentWillMount() {
        this.props.actions.loadEntityById(this.props.userId, this.profileConfig);
    }

    handleFileUpload = (e) => {
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append('file', file);
        this.props.actions.uploadAvatar(formData, this.profileAvatarConfig);
    };

    handleSubmit = (values) => {
        this.props.actions.updateEntity(this.props.userId, values, this.profileConfig);
    };

    render() {
        const {user} = this.props;
        return (
            <View user={user}
                  onSubmit={this.handleSubmit}
                  handleFileUpload={this.handleFileUpload}
                  passwordState={this.state.password}
                  passwordOnChange={this.passwordOnChange}
                  handlePasswordChangeSubmit={this.handlePasswordChangeSubmit}/>
        );
    }
}

Profile.propTypes = {
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
    return {
        userId: state.auth.user.id,
        user: state.profile.data
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);