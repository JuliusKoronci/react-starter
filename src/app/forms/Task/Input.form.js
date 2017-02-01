import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/tasks.action';

class Input extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            className: props.className || 'md-input'
        }
    }

    handleChange = (e) => {
        this.handleSubmit(e);
    };

    handleKeyPress = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            this.handleSubmit(e);
        }
    };

    handleSubmit = (e) => {
        this.props.actions.taskUpdated(
            {
                [this.props.fieldName]: e.target.value
            },
            this.props.taskId
        )
    };

    render() {
        return (
            <input onChange={this.handleChange} onBlur={this.handleSubmit} onKeyPress={this.handleKeyPress}
                   className={this.state.className}
                   value={this.props.task[this.props.fieldName]}/>
        );
    }
}

Input.propTypes = {
    taskId: PropTypes.number.isRequired,
    fieldName: PropTypes.string,
    className: PropTypes.string
};


function mapStateToProps(state, ownProps) {
    const task = state.tasks.data.filter((task) => {
        return task.id === ownProps.taskId;
    })[0];

    return {
        task: task
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);