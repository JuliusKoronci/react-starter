import React, {Component} from 'react';
import View from '../../../views/templates/sidebar.jsx';


class Sidebar extends Component {

    constructor(props, context) {
        super(props, context);

    }

    menuToggleActive=(e)=>{

        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
        } else {
            e.target.classList.add('active');
        }

    };

    render() {

        return (
            <View {...this.props} menuToggleActive={this.menuToggleActive} />
        );
    }
}



export default Sidebar;