import React, {PropTypes, Component} from 'react';
// import View from '../../../../views/templates/main/settings/companies/add_company.jsx';
import View from '../../../../forms/Settings/AddCompany.form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import NProgress from '../../../../../../node_modules/nprogress/nprogress';

class Company extends Component {

    constructor(props, context) {
        super(props, context);
    }

    onSubmit = (values) => {
        NProgress.start();
        this.props.actions.companyPost(values);
    };


    render() {
        return (
            <View formError={null} onSubmit={this.onSubmit}/>
        );
    }
}

Company.propTypes = {
    //myProp: PropTypes.string.isRequired
};


function mapStateToProps(state) {
    return {
        company: state.company
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Company);