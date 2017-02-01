import React, {Component} from 'react';
import View from '../../../../forms/Settings/Company.form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import NProgress from '../../../../../../node_modules/nprogress/nprogress';
import {COMPANY_ENTITY} from '../../../../redux/constants';

class Company extends Component {

    componentDidMount() {
        if (this.props.params.companyId && !this.props.company) {
            this.props.actions.loadEntityById(COMPANY_ENTITY, this.props.params.companyId);
        }
    }

    onSubmit = (values) => {
        NProgress.start();

        if (this.props.params.companyId) {
            this.props.actions.updateEntity(COMPANY_ENTITY, this.props.params.companyId, values);
        } else {
            this.props.actions.createEntity(COMPANY_ENTITY, values);
        }
    };


    render() {


        return (
            <View formError={null} onSubmit={this.onSubmit} {...this.props}
                  heading={this.props.company ? "Edit company" : "Add company"}/>
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