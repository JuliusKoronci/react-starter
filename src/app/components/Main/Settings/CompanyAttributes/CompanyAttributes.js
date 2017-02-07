import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/company_attributes/company_attributes.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import configResolver from '../../../../../config/configResolver';

class CompanyAttributes extends Component {

    constructor(props, context) {
        super(props, context);
        this.entityConfig = configResolver.getCompanyAttributesConfig(props.params.companyAttributeId);
    }

    deleteHandler=(id)=>{
        this.props.actions.deleteEntity(id, this.entityConfig);
    };

    componentWillMount() {
        this.props.actions.requestCompanyAttributes();
    }

    render() {
        return (
            <View {...this.props.companyAttributes} loadCompanyAttributes={this.props.actions.requestCompanyAttributes} handleDelete={this.deleteHandler}/>
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
        actions: bindActionCreators({...actions, ...generalActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyAttributes);

