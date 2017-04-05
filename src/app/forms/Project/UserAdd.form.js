import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {renderField, renderSelect} from '../field.tpl';
import {Field, reduxForm} from 'redux-form';
import {required} from '../../../config/validation';


class UserAdd extends Component {

    render() {
        const {handleSubmit,usersAll} = this.props;
        return (
            <div className="md-card">
                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">

                        <div className="uk-input-group">
                            <div className="md-input-wrapper">

                                <Field name="userId" type="select" validate={[required]} component={renderSelect} label="Add user" options={
                                    usersAll.map((user)=>{
                                     return {id:user.id, title:user.username}
                                     })
                                } />


                                <span className="md-input-bar "/></div>
                            <span className="uk-input-group-addon"><button className="md-btn md-btn-success button_next_input" type="submit">Add</button></span>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}

UserAdd = reduxForm({
    form: 'UserAdd',
    enableReinitialize: true
})(UserAdd);

export default connect(mapStateToProps)(UserAdd);
