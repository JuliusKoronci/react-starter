import React, {Component} from 'react';
import View from '../../../views/templates/sidebar.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createTask} from '../../../redux/actions/tasks.action';

class Sidebar extends Component {

    menuToggleActive = (e) => {

        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
        } else {
            e.target.classList.add('active');
        }

    };

    _handleCreateTask = () => {
        this.props.createTask();
    };

    render() {

        return (
            <View {...this.props} createTask={this._handleCreateTask} menuToggleActive={this.menuToggleActive}/>
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