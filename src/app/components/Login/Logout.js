import {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/auth.actions';
import {history} from '../../../config/store';

class Logout extends Component {

    componentWillMount(){
        this.props.actions.logout();
        history.push('/login');
    }

    render() {
        return null;
    }
}

Logout.propTypes = {
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);