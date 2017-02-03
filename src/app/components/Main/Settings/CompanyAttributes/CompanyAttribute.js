import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/company_attributes/company_attributes.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class CompanyAttributes extends Component {

    componentWillMount() {
        this.props.actions.requestCompanyAttributes();
    }

    render() {
        return (
            <View {...this.props.companyAttributes} loadCompanyAttributes={this.props.actions.requestCompanyAttributes}/>
        );
    }
}

CompanyAttributes.propTypes = {
    companyAttributes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        companyAttributes: state.companyAttributes
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyAttributes);

