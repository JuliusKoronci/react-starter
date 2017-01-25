import React, {PropTypes, Component} from 'react';
import UserAvatar from '../../../views/templates/main/_partials/userAvatar.jsx';
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
            <li className={this.state.dropdownToggled ? "uk-open" : ""} onClick={this.toggle}>
                <a href="#" className="user_action_image">
                    <UserAvatar user={this.props.user}/>
                </a>

                {this.state.dropdownToggled &&
                <UserMenuView logout={this.props.logout} />}
            </li>
        );
    }
}

UserMenu.propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};


export default UserMenu;