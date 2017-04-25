import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import UserMenuView from '../../../views/templates/main/header/userDropdownMenu.jsx';


class UserMenu extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {dropdownToggled: false};
    }



    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside.bind(this), true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside.bind(this), true);
    }

    handleClickOutside(event) {
        const domNode = ReactDOM.findDOMNode(this);

        if ((!domNode || !domNode.contains(event.target))) {
            this.setState({
                dropdownToggled : false
            });
        }
    }




    handleToggle = () => {
        this.setState({dropdownToggled: !this.state.dropdownToggled});
    };


    render() {
        return (
            <UserMenuView {...this.props} {...this.state} handleToggle={this.handleToggle} />
        );
    }
}

UserMenu.propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};


export default UserMenu;