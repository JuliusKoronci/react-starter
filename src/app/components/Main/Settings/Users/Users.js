import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/users/users.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class Users extends Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            searchTerm:''
        }
        }

    componentWillMount() {
        this.props.actions.requestUsers();
    }


    searchInputOnChange=(e)=>{
        const value=e.target.value;
        this.setState({searchTerm:value})
    };

    searchHandler=()=>{
        if(this.state.searchTerm) {
            this.props.actions.requestUsersSearch(this.state.searchTerm);
        }else{
            this.props.actions.requestUsers();
        }
    };

    render() {
        return (
            <View {...this.props.users} loadUsers={this.props.actions.requestUsers} searchHandler={this.searchHandler} searchTerm={this.state.searchTerm} searchInputOnChange={this.searchInputOnChange} />
        );
    }
}

Users.propTypes = {
    users: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        users: state.users
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
