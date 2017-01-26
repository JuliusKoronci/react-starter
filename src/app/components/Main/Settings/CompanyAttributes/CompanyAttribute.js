import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/company_attributes/company_attributes.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class CompaniesCustomFields extends Component {

    componentWillMount() {
        this.props.actions.requestCompaniesCustomFields();
    }

    render() {
        return (
            <View {...this.props.companiesCustomFields} loadCompaniesCustomFields={this.props.actions.requestCompaniesCustomFields}/>
        );
    }
}

CompaniesCustomFields.propTypes = {
    companiesCustomFields: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        companiesCustomFields: state.companiesCustomFields
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesCustomFields);

