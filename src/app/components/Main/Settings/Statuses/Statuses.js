import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/statuses/statuses.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class Statuses extends Component {

    componentWillMount() {
        this.props.actions.requestStatuses();
    }

    render() {
        return (
            <View {...this.props.statuses} loadStatuses={this.props.actions.requestStatuses}/>
        );
    }
}

Statuses.propTypes = {
    statuses: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        statuses: state.statuses
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Statuses);

