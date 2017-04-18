import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/actions/tasks.action';

class Input extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            className: props.className || 'md-input',
            error: ''
        }
    }

    componentWillUnmount() {
        if (this.props.number) {
            let val = this.props.task[this.props.fieldName];
            if (isNaN(Number.parseFloat(val))) {
                val = '';
            } else {
                val = Number.parseFloat(val);
            }

            this.props.actions.taskUpdated(
                {
                    [this.props.fieldName]: val
                },
                this.props.taskId
            )
        }
    }

    handleChange = (e) => {

        if(this.props.formInputChangeHandler){
            this.props.formInputChangeHandler(this.props.fieldName,e.target.value);
        }else {
            this.handleSubmit(e);
        }
    };

    handleKeyPress = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            this.handleSubmit(e);
        }
    };

    handleSubmit = (e) => {
        let val = e.target.value;
        if (this.props.number) {
            if (isNaN(Number.parseFloat(val))) {
                this.setState({
                    error: 'Not a valid number'
                });
            } else {
                this.setState({
                    error: ''
                });
            }
        }
        this.props.actions.taskUpdated(
            {
                [this.props.fieldName]: val
            },
            this.props.taskId
        )
    };

    render() {

        let val=this.props.form && this.props.form[this.props.fieldName]?this.props.form[this.props.fieldName]:false;

        const value = val || this.props.task[this.props.fieldName] || '';

        return (
            <div>
                <input onChange={this.handleChange} onBlur={this.handleSubmit} onKeyPress={this.handleKeyPress}
                       className={this.state.className}
                       value={value}/>
                <span style={{color: 'red'}}>{this.state.error}</span>
            </div>
        );
    }
}

Input.defaultValue = {
    value: ''
};

Input.propTypes = {
    taskId: PropTypes.number.isRequired,
    fieldName: PropTypes.string,
    className: PropTypes.string
};


function mapStateToProps(state) {
    const task = state.tasks.task.data;

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