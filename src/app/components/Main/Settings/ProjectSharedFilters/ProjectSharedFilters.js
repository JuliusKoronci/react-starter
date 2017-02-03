import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/project_shared_filters/project_shared_filters.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class ProjectSharedFilters extends Component {

    componentWillMount() {
        this.props.actions.requestProjectSharedFilters();
    }

    render() {
        return (
            <View {...this.props.projectSharedFilters} loadProjectSharedFilters={this.props.actions.requestProjectSharedFilters}/>
        );
    }
}

ProjectSharedFilters.propTypes = {
    projectSharedFilters: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        projectSharedFilters: state.projectSharedFilters
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSharedFilters);

