import React, {PropTypes, Component} from 'react';

class Users extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>Users</div>
        );
    }
}

Users.propTypes = {
    //myProp: PropTypes.string.isRequired 
};


export default Users;
