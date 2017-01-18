import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/auth.actions';
import * as asyncActions from '../../redux/actions/async.action';
import {history} from '../../../config/store';
import toastr from 'toastr';
import {isUserStoredLocaly} from '../../../config/security';
import jwtDecode from 'jwt-decode';
import Layout from '../../views/templates/layout.jsx';
import NProgress from '../../../../node_modules/nprogress/nprogress';
import '../../views/assets/css/main.css';
import '../../views/assets/css/themes/themes_combined.min.css';
import '../../views/assets/css/nprogress.css';

class Main extends Component {

    componentDidMount() {
        document.body.className = 'sidebar_main_open sidebar_main_swipe';
        this.isAuthenticated();
    }

    componentDidUpdate() {
        this.isAuthenticated();

        if (this.props.load_count >= 0 && !this.props.stop) {
            NProgress.start();
        }
        if (this.props.load_count < 1 && this.props.stop) {
            NProgress.done();
        }
    }

    isAuthenticated = () => {
        if (!this.props.authenticated) {
            const token = isUserStoredLocaly();
            if (token) {
                this.props.actions.loginSucces(token, jwtDecode(token));
            } else {
                toastr.error('You are not logged in!');
                history.push('login');
            }
        }

        return false;
    };

    render() {
        const {authenticated} = this.props;
        if (authenticated) {
            return <Layout children={this.props.children}/>;
        }

        return null;
    }
}

Main.propTypes = {
    //myProp: PropTypes.string.isRequired
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        loading: state.async.loading,
        stop: state.async.stop,
        load_count:state.async.load_count?state.async.load_count:0
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...asyncActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);