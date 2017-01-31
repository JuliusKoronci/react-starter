import React, {PropTypes, Component} from 'react';
// import View from '../../../../views/templates/main/settings/companies/add_company.jsx';
import View from '../../../../forms/Settings/Company.form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import NProgress from '../../../../../../node_modules/nprogress/nprogress';

class Company extends Component {

    componentDidMount() {
        if (this.props.params.companyId && !this.props.company) {
            this.props.actions.loadEntityById('company',this.props.params.companyId);
        }
    }

    onSubmit = (values) => {
        NProgress.start();

        if (this.props.params.companyId){
            this.props.actions.updateEntity('company',this.props.params.companyId,values);
        }else {
            this.props.actions.createEntity('company',values);
        }
    };


    render() {

        if (this.props.company) {
            return(
                <View formError={null} onSubmit={this.onSubmit} {...this.props} heading="Edit company" />
                )
        } else {
            return (
                <View formError={null} onSubmit={this.onSubmit} {...this.props} heading="Add company" />
            );
        }

    }

}

Company.propTypes = {
    //myProp: PropTypes.string.isRequired
};


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