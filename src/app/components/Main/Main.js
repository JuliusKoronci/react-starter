import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/auth.actions';
import * as asyncActions from '../../redux/actions/async.action';
import * as systemActions from '../../redux/actions/system.actions';
import {history} from '../../../config/store';
import toastr from 'toastr';
import {isUserStoredLocaly} from '../../../config/security';
import jwtDecode from 'jwt-decode';
import Layout from '../../views/templates/layout.jsx';
import NProgress from '../../../../node_modules/nprogress/nprogress';
import '../../views/assets/css/main.css';
import '../../views/assets/css/themes/themes_combined.min.css';
import '../../views/assets/css/nprogress.css';
import {getFromStorage} from '../../services/storage';
import {TOGGLE_SIDEBAR} from '../../redux/constants';

class Main extends Component {

    componentDidMount() {
        document.body.className = 'sidebar_main_open sidebar_main_swipe';
        this.props.actions.requestFilters();
    }

    componentWillMount(){
        this.isAuthenticated();

        if(getFromStorage(TOGGLE_SIDEBAR)){
            console.log('got sidebar from storage: ' + getFromStorage(TOGGLE_SIDEBAR));
        }
        else{
            console.log('sidebar in storage: '+ getFromStorage(TOGGLE_SIDEBAR));
        }

        this.props.actions.toggleSidebar(getFromStorage(TOGGLE_SIDEBAR));


    }

    componentDidUpdate() {
        this.isAuthenticated();
        this.handleAsyncErrors();

        console.log('Main.js sidebar is shown ' + this.props.sidebarIsShown);

        if(this.props.sidebarIsShown){
            document.body.classList.remove('sidebar_mini');
        }else{
            document.body.classList.add('sidebar_mini');
        }


        if (this.props.load_count > 0 && !this.props.stop) {
            NProgress.start();
        }
        if (this.props.load_count < 1 && this.props.stop) {
            NProgress.done();
        }
    }

    handleAsyncErrors = () => {
        if (this.props.error.status !== 0 && this.props.error.message !== '') {
            switch (this.props.error.status) {
                case 401:
                    this.props.actions.logout();
                    break;
                default:
                    toastr.error(this.props.error.message);
                    break;
            }
        }
    };

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
            return <Layout children={this.props.children} {...this.props} sidebarIsShown={this.props.sidebarIsShown} />;
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
        error: state.async.error,
        load_count: state.async.load_count ? state.async.load_count : 0,
        user: state.auth.user,
        filter: state.filter,
        sidebarIsShown: state.settings.sidebarIsShown
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...asyncActions, ...systemActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);