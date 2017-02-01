import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/units/units.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class Units extends Component {

    componentWillMount() {
        this.props.actions.requestUnits();
    }

    render() {
        return (
            <View {...this.props.units} loadUnits={this.props.actions.requestUnits}/>
        );
    }
}

Units.propTypes = {
    units: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        units: state.units
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Units);
