import React, {Component} from 'react';
import View from '../../../views/templates/sidebar.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createTask} from '../../../redux/actions/tasks.action';

class Sidebar extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            projectsOpen: true,
            archivedProjectsOpen: false,
            tagsOpen: false,
            reportsOpen: false
        };
    }


    menuToggleActive = (name,e) => {

        if(this.state.hasOwnProperty(name)){
            let newState=Object.assign({}, this.state, {[name]:!this.state[name]});
            this.setState(newState);
        }

        // if (e.target.classList.contains('active')) {
        //     e.target.classList.remove('active');
        // } else {
        //     e.target.classList.add('active');
        // }

    };

    _handleCreateTask = () => {
        this.props.createTask();
    };

    render() {

        return (
            <View {...this.props} {...this.state} createTask={this._handleCreateTask} menuToggleActive={this.menuToggleActive}/>
        );
    }
}

const _mapStateToProps = (state) => {
    return {};
};

const _mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createTask}, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(Sidebar);