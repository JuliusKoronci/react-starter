import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/companies/companies.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
import {SETTING_REFRESH_INTERVAL} from '../../../../../config/config';
import configResolver from '../../../../../config/configResolver';

class Companies extends Component {

    constructor(props, context) {
        super(props, context);
        this.companyConfig = configResolver.getCompanyConfig(props.params.companyId);

        this.state = {
            searchTerm:''
        }
    }


    searchInputOnChange=(e)=>{
        const value=e.target.value;
        this.setState({searchTerm:value})
    };

    searchHandler=()=>{
        if(this.state.searchTerm) {
            this.props.actions.requestCompaniesSearch(this.state.searchTerm);
        }else{
            this.props.actions.requestCompanies();
        }
    };


    deleteHandler=(id)=>{
        this.props.actions.deleteEntity(id, this.companyConfig);
    };

    componentWillMount() {
        this.props.actions.requestCompanies();
        this.interval = setInterval(this.props.actions.requestCompanies, SETTING_REFRESH_INTERVAL)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <View {...this.props.companies} loadCompanies={this.props.actions.requestCompanies} handleDelete={this.deleteHandler} searchHandler={this.searchHandler} searchTerm={this.state.searchTerm} searchInputOnChange={this.searchInputOnChange} />
        );
    }
}
Companies.propTypes = {
    companies: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        companies: state.companies
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Companies);