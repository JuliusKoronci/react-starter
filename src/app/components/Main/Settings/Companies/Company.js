import React, {Component} from 'react';
import View from '../../../../forms/Settings/Company.form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import NProgress from '../../../../../../node_modules/nprogress/nprogress';
import configResolver from '../../../../../config/configResolver';

class Company extends Component {
    constructor(props, context) {
        super(props, context);
        this.companyConfig = configResolver.getCompanyConfig(props.params.companyId);
    }

    deleteHandler=(id)=>{
        this.props.actions.deleteEntity(this.props.params.companyId, this.companyConfig);
    };

    componentWillMount() {
        if (this.props.params.companyId && !this.props.company) {
            this.props.actions.loadEntityById(this.props.params.companyId, this.companyConfig);
        }
    }

    onSubmit = (values) => {
        NProgress.start();

        if (this.props.params.companyId) {
            this.props.actions.updateEntity(this.props.params.companyId, values, this.companyConfig);
        } else {
            this.props.actions.createEntity(values,this.companyConfig);
        }
    };


    render() {


        return (
            <View formError={null} onSubmit={this.onSubmit} {...this.props}
                  heading={this.props.company ? "Edit company" : "Add company"} handleDelete={this.deleteHandler} />
        )

    }

}


function mapStateToProps(state, ownProps) {
    const companyId = ownProps.params.companyId;
    const company = state.companies.data.filter((company) => parseInt(company.id, 10) === parseInt(companyId, 10));
    return {
        company: company.length > 0 ? company[0] : false,
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Company);