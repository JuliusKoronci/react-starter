import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/imaps/imaps.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class Imaps extends Component {

    componentWillMount() {
        this.props.actions.requestImaps();
    }

    render() {
        return (
            <View {...this.props.imaps} loadImaps={this.props.actions.requestImaps}/>
        );
    }
}

Imaps.propTypes = {
    imaps: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        imaps: state.imaps
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Imaps);
