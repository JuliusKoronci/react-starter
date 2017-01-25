import React, {PropTypes, Component} from 'react';
import UserMenuView from '../../../views/templates/main/header/userMenu';


class UserMenu extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {dropdownToggled: false};
    }

    toggle = () => {
        this.setState({dropdownToggled: !this.state.dropdownToggled});
    };


    render() {
        return (
            <UserMenuView {...this.props} {...this.state} toggle={this.toggle} />
        );
    }
}

UserMenu.propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};


export default UserMenu;