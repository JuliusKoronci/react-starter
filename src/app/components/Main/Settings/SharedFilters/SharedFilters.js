import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/shared_filters/shared_filters.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class SharedFilters extends Component {

    componentWillMount() {
        this.props.actions.requestSharedFilters();
    }

    render() {
        return (
            <View {...this.props.sharedFilters} loadSharedFilters={this.props.actions.requestSharedFilters}/>
        );
    }
}

SharedFilters.propTypes = {
    sharedFilters: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        sharedFilters: state.sharedFilters
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SharedFilters);
