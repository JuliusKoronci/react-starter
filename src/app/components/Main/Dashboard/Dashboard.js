import React, {PropTypes, Component} from 'react';

class Dashboard extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>Dashboard</div>
        );
    }
}

Dashboard.propTypes = {
    //myProp: PropTypes.string.isRequired
};


export default Dashboard;