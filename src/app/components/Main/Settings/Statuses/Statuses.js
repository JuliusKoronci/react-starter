import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/statuses/statuses.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import configResolver from '../../../../../config/configResolver';

class Statuses extends Component {

    constructor(props, context) {
        super(props, context);
        this.statusConfig = configResolver.getStatusConfig(props.params.statusId);
    }

    componentWillMount() {
        this.props.actions.requestStatuses();
    }

    deleteHandler=(id)=>{
        this.props.actions.deleteEntity(id, this.statusConfig);
    };

    render() {
        return (
            <View {...this.props.statuses} loadStatuses={this.props.actions.requestStatuses} handleDelete={this.deleteHandler} />
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
        actions: bindActionCreators({...actions, ...generalActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Statuses);

