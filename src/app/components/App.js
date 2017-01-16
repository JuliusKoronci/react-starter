import React, {Component} from 'react';
import '../../../node_modules/uikit/dist/css/uikit.almost-flat.min.css';
import '../views/assets/css/login_page.css';

class App extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

export default App;