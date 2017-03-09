import React, {Component} from 'react';
import View from '../../../forms/Tag/Tag.form.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/settings.action';
import * as generalActions from '../../../redux/actions/general.action';
import configResolver from '../../../../config/configResolver';
import {reset} from 'redux-form';

class Tag extends Component {

    constructor(props, context) {
        super(props, context);
        this.tagConfig = configResolver.getTagConfig(props.params.tagId);
        this.tagCreatedConfig = configResolver.tagCreatedConfig(props.params.tagId);
    }

    componentDidUpdate(prevProps){
    }

    componentWillMount() {
        if (this.props.params.tagId && !this.props.tag) {
            this.props.actions.loadEntityById(this.props.params.tagId, this.tagConfig);
        }
    }

    onSubmit = (values) => {
        if (this.props.params.tagId) {
            this.tagConfig = configResolver.getTagConfig(this.props.params.tagId);
            this.props.actions.updateEntity(this.props.params.tagId, values, this.tagConfig);
        } else {
            this.tagCreatedConfig = configResolver.tagCreatedConfig(this.props.params.tagId);
            this.props.actions.createEntity(values,this.tagCreatedConfig);
        }
    };

    render() {
        return (
            <View onSubmit={this.onSubmit} {...this.props} heading={this.props.tag ? "Edit tag" : "Add tag"} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const tagId = ownProps.params.tagId;
    const tag = state.tags.data.filter((tag) => parseInt(tag.id, 10) === parseInt(tagId, 10));
    return {
        tag: tag.length > 0 ? tag[0] : false,
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...generalActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tag);
