import React, {PropTypes, Component} from 'react';

class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

App.propTypes = {
    //myProp: PropTypes.string.isRequired
};


export default App;