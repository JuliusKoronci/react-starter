import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/auth.actions';
import * as asyncActions from '../../redux/actions/async.action';
import * as systemActions from '../../redux/actions/system.actions';
import {history} from '../../../config/store';
import toastr from '../../../config/modules';
import {isUserStoredLocaly} from '../../../config/security';
import jwtDecode from 'jwt-decode';
import Layout from '../../views/templates/layout.jsx';
import NProgress from '../../../../node_modules/nprogress/nprogress';
import '../../../../node_modules/draft-js/dist/Draft.css';
import '../../../../node_modules/flatpickr/dist/flatpickr.min.css';
import '../../../../node_modules/react-select/dist/react-select.min.css';
import '../../views/assets/css/main.css';
import '../../views/assets/css/themes/themes_combined.min.css';
import '../../views/assets/css/nprogress.css';
import {getFromStorage} from '../../services/storage';
import {SIDEBAR_IS_MINIFIED} from '../../redux/constants';

class Main extends Component {

    componentDidMount() {
        document.body.className = 'sidebar_main_open sidebar_main_swipe';
        this.props.actions.requestFilters();
        this.props.actions.requestProjects();
        this.props.actions.requestTags();

    }

    componentWillMount() {
        this.isAuthenticated();
        this.props.actions.toggleSidebar(!!getFromStorage(SIDEBAR_IS_MINIFIED));
    }

    componentDidUpdate() {
        this.isAuthenticated();
        this.handleAsyncErrors();


        //minified or normal sidebar
        if (this.props.sidebarIsMinified) {
            document.body.classList.add('sidebar_mini');
        } else {
            document.body.classList.remove('sidebar_mini');
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
            return <Layout children={this.props.children} {...this.props}
                           sidebarIsMinified={this.props.sidebarIsMinified} />;
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
        sidebarIsMinified: state.settings.sidebarIsMinified,
        projects:state.projects.data,
        tags:state.tags.data,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...asyncActions, ...systemActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);