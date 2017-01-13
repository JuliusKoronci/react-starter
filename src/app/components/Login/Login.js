import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/auth.actions';
import LoginForm from '../../forms/Login/Login.form';
import {history} from '../../../config/store';
import toastr from 'toastr';
import NProgress from '../../../../node_modules/nprogress/nprogress';

class Login extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.isLoggedIn();
    }

    componentDidUpdate() {
        this.isLoggedIn();
    }

    isLoggedIn = () => {
        if (this.props.state.auth.authenticated) {
            NProgress.done();
            toastr.success('Welcome ' + this.props.state.auth.user.username);
            history.push('/');
        }
    };

    onSubmit = (values) => {
        NProgress.start();
        this.props.actions.login(values);
    };

    render() {
        return (
            <LoginForm onSubmit={this.onSubmit}/>
        );
    }
}

Login.propTypes = {
    //myProp: PropTypes.string.isRequired
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
    return {
        state: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);