import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/smtps/smtps.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class Smtps extends Component {

    componentWillMount() {
        this.props.actions.requestSmtps();
    }

    render() {
        return (
            <View {...this.props.smtps} loadSmtps={this.props.actions.requestSmtps}/>
        );
    }
}

Smtps.propTypes = {
    smtps: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        smtps: state.smtps
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Smtps);
