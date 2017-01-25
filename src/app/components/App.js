import React, {Component} from 'react';
import '../../../node_modules/uikit/dist/css/uikit.almost-flat.min.css';
import '../views/assets/css/login_page.css';
import '../../../node_modules/toastr/build/toastr.min.css';
import '../../../node_modules/nprogress/nprogress.css';
import '../../../libs/react-datetime/css/react-datetime.css';

class App extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

export default App;