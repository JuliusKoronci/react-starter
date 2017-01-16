import React, {PropTypes, Component} from 'react';

class NotFoundPage extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="md-card-content">
                Page Not Found ...
            </div>
        );
    }
}

NotFoundPage.propTypes = {
    //myProp: PropTypes.string.isRequired
};


export default NotFoundPage;