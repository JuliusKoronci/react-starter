import React, {Component} from 'react';
// import View from '../../../../views/templates/main/settings/statuses/add_status.jsx';
import View from '../../../../forms/Settings/Status.form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';
import * as generalActions from '../../../../redux/actions/general.action';
// import NProgress from '../../../../../../node_modules/nprogress/nprogress';
import configResolver from '../../../../../config/configResolver';

class Status extends Component {

    constructor(props, context) {
        super(props, context);
        this.statusConfig = configResolver.getStatusConfig(props.params.statusId);
    }

    deleteHandler=(id)=>{
        this.props.actions.deleteEntity(this.props.params.statusId, this.statusConfig);
    };

    componentWillMount() {
        if (this.props.params.statusId && !this.props.status) {
            this.props.actions.loadEntityById(this.props.params.statusId, this.statusConfig);
        }
    }

    onSubmit = (values) => {
        // NProgress.start();

        if (this.props.params.statusId) {
            let config=configResolver.statusUpdate(this.props.params.statusId);
            this.props.actions.updateEntity(this.props.params.statusId, values, config);
        } else {

            // values['order']=0;
            this.props.actions.createEntity(values,this.statusConfig);
        }
    };


    render() {


        return (
            <View formError={null} onSubmit={this.onSubmit} {...this.props}
                  heading={this.props.status ? "Edit status" : "Add status"} handleDelete={this.deleteHandler} />
        )

    }

}




function mapStateToProps(state, ownProps) {
    const statusId = ownProps.params.statusId;
    const status = state.statuses.data.filter((status) => parseInt(status.id, 10) === parseInt(statusId, 10));

    return {
        status: status.length > 0 ? status[0] : false,
    };

}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Status);
