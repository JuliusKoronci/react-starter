import React, {Component} from 'react';
import View from '../../../../forms/Settings/Unit.form.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import configResolver from '../../../../../config/configResolver';

class UnitForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.unitConfig = configResolver.getUnitConfig(props.params.unitId);
    }

    componentWillMount() {
        if (this.props.params.unitId && !this.props.unit) {
            this.props.actions.loadEntityById(this.props.params.unitId, this.unitConfig);
        }
    }

    onSubmit = (values) => {
        if (this.props.params.unitId) {
            this.props.actions.updateEntity(this.props.params.unitId, values, this.unitConfig);
        } else {
            console.log(values)
            this.props.actions.createEntity(values,this.unitConfig);
            console.log('ok')
        }
    };

    render() {
        return (
            <View onSubmit={this.onSubmit} {...this.props} heading={this.props.unit ? "Edit unit" : "Add unit"} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const unitId = ownProps.params.unitId;
    const unit = state.units.data.filter((unit) => parseInt(unit.id, 10) === parseInt(unitId, 10));
    return {
        unit: unit.length > 0 ? unit[0] : false,
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitForm);
